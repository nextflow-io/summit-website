const path = require('path');

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = [
    `
      type MetaFields implements Node {
        title: String
        description: String
        image: File @fileByRelativePath
      }
    `,
    `
      type People implements Node {
        name: String!
        position: String!
        email: String
        image: File @fileByRelativePath
        content: Mdx
        tags: [String]
        meta: MetaFields
      }
    `,
    `
      type Event implements Node {
        slug: String
        title: String
        description: String
        datetime: Date @dateformat
        date: String
        time: String
        timeframe: String
        speakers: [People] @link(by: "name")
        events: [Event] @link(by: "slug")
        isChild: Boolean
        location: String
        locationUrl: String
        youtube: String
        youtubeUrl: String
        tags: [String]
        meta: MetaFields
        content: Mdx
      }
    `,
    `
      type Accommodation implements Node {
        title: String
        image: File @fileByRelativePath
        stars: Int
        url: String
        walkingTime: String
        breakfast: Boolean
        adultOne: String
        adultsTwo: String
        tax: String
        promotionCode: String
        content: Mdx
      }
    `,
  ];

  createTypes(typeDefs);
};

exports.onCreateNode = ({ node, actions, getNode, createNodeId, createContentDigest }) => {
  const { createNodeField, createNode } = actions;

  if (node.internal.type === 'Mdx') {
    const parent = getNode(node.parent);

    if (parent.internal.type === 'File') {
      createNodeField({
        name: 'sourceName',
        node,
        value: parent.sourceInstanceName,
      });
    }

    if (parent.internal.type === 'File' && parent.sourceInstanceName === 'people') {
      const content = {
        slug: node.frontmatter.slug,
        name: node.frontmatter.name,
        email: node.frontmatter.email,
        position: node.frontmatter.position,
        image: node.frontmatter.image,
        github: node.frontmatter.github,
        twitter: node.frontmatter.twitter,
        linkedin: node.frontmatter.linkedin,
        tags: node.frontmatter.tags || [],
        meta: node.frontmatter.meta,
        content: node,
      };

      createNode({
        id: createNodeId(`people-${node.id}`),
        parent: node.id,
        children: [],
        internal: {
          type: 'People',
          contentDigest: createContentDigest(content),
        },
        ...content,
      });
    }

    if (parent.internal.type === 'File' && parent.sourceInstanceName === 'events') {
      const content = {
        slug: node.frontmatter.slug,
        title: node.frontmatter.title,
        description: node.frontmatter.description,
        datetime: node.frontmatter.datetime,
        date: node.frontmatter.date,
        time: node.frontmatter.time,
        timeframe: node.frontmatter.timeframe,
        events: node.frontmatter.events,
        isChild: node.frontmatter.isChild,
        speakers: node.frontmatter.speakers,
        location: node.frontmatter.location,
        locationUrl: node.frontmatter.locationUrl,
        youtube: node.frontmatter.youtube,
        youtubeUrl: node.frontmatter.youtubeUrl,
        tags: node.frontmatter.tags,
        meta: node.frontmatter.meta,
        content: node,
      };

      createNode({
        id: createNodeId(`event-post-${node.id}`),
        parent: node.id,
        children: [],
        internal: {
          type: 'Event',
          contentDigest: createContentDigest(content),
        },
        ...content,
      });
    }

    if (parent.internal.type === 'File' && parent.sourceInstanceName === 'accommodations') {
      const content = {
        title: node.frontmatter.title,
        image: node.frontmatter.image,
        stars: node.frontmatter.stars,
        url: node.frontmatter.url,
        walkingTime: node.frontmatter.walkingTime,
        breakfast: node.frontmatter.breakfast,
        adultOne: node.frontmatter.adultOne,
        adultsTwo: node.frontmatter.adultsTwo,
        tax: node.frontmatter.tax,
        promotionCode: node.frontmatter.promotionCode,
        content: node,
      };

      createNode({
        id: createNodeId(`accommodation-post-${node.id}`),
        parent: node.id,
        children: [],
        internal: {
          type: 'Accommodation',
          contentDigest: createContentDigest(content),
        },
        ...content,
      });
    }
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions;

  const speakerTemplate = path.resolve('src/templates/speaker.jsx');

  const result = await graphql(`
    {
      speakers: allPeople {
        nodes {
          slug
        }
      }
    }
  `);

  if (result.errors) {
    rporter.panicOnBuild('Build failed while running GraphQL query');
    return;
  }

  const speakers = result.data.speakers.nodes;

  speakers.forEach((speaker) => {
    createPage({
      path: speaker.slug,
      component: speakerTemplate,
      context: {
        slug: speaker.slug,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ actions, loaders }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.jsx$/,
          use: [loaders.js()],
        },
      ],
    },
  });
};
