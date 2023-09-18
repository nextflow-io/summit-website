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
      type Blog implements Node {
        slug: String!
        title: String!
        author: String!
        datetime: Date @dateformat
        meta: MetaFields
        content: Mdx
      }
    `,
    `
      type People implements Node {
        name: String!
        position: String!
        email: String
        content: Mdx
        tags: [String]
        attending: String
        is_keynote: Boolean
        meta: MetaFields
      }
    `,
    `
      type Event implements Node {
        type: String
        slug: String
        path: String
        fullPath: String
        is_keynote: Boolean
        is_sponsor: Boolean
        title: String
        description: String
        datetime: Date @dateformat
        date: String
        time: String
        timeframe: String
        speakers: [People] @link(by: "name")
        events: [Event] @link(by: "slug")
        isChild: Boolean
        hasPage: Boolean
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
        location: String
        content: Mdx
      }
    `,
    `
      type Poster implements Node {
        slug: String
        title: String
        url: String
        image: File @fileByRelativePath
        poster: File @fileByRelativePath
        speakers: [People] @link(by: "name")
        tags: [String]
        meta: MetaFields
        content: Mdx
      }
    `,
  ];

  createTypes(typeDefs);
};

function createEventPath(filePath) {
  let location = 'barcelona';
  let prefix = 'summit';
  if (filePath.includes('boston')) location = 'boston';
  if (filePath.includes('events')) prefix = 'hackathon';
  return `/${location}/agenda/${prefix}/`;
}

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

    if (parent.internal.type === 'File' && parent.sourceInstanceName === 'blogs') {
      const content = {
        slug: node.frontmatter.slug,
        title: node.frontmatter.title,
        author: node.frontmatter.author,
        datetime: node.frontmatter.datetime,
        meta: node.frontmatter.meta,
        content: node,
      };

      createNode({
        id: createNodeId(`blog-${node.id}`),
        parent: node.id,
        children: [],
        internal: {
          type: 'Blog',
          contentFilePath: node.internal.contentFilePath,
          contentDigest: createContentDigest(content),
        },
        ...content,
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
        attending: node.frontmatter.attending || [],
        is_keynote: node.frontmatter.is_keynote || false,
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

    if (
      parent.internal.type === 'File' &&
      ['events', 'talks', 'events-boston', 'talks-boston'].includes(parent.sourceInstanceName)
    ) {
      const hasPage = node.frontmatter.hasPage;
      const slug = node.frontmatter.slug;
      const filePath = node.internal.contentFilePath;
      const eventPath = createEventPath(filePath);
      const fullEventPath = `${eventPath}${slug}/`;

      const content = {
        type: parent.sourceInstanceName,
        slug,
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
        hasPage,
        path: hasPage ? eventPath : null,
        fullPath: hasPage ? fullEventPath : null,
        is_keynote: node.frontmatter.is_keynote || false,
        is_sponsor: node.frontmatter.is_sponsor || false,
        tags: node.frontmatter.tags,
        meta: node.frontmatter.meta,
        content: node,
      };

      createNode({
        id: createNodeId(`event-${node.id}`),
        parent: node.id,
        children: [],
        internal: {
          type: 'Event',
          contentFilePath: filePath,
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
        location: node.frontmatter.location,
        content: node,
      };

      createNode({
        id: createNodeId(`accommodation-${node.id}`),
        parent: node.id,
        children: [],
        internal: {
          type: 'Accommodation',
          contentDigest: createContentDigest(content),
        },
        ...content,
      });
    }

    if (parent.internal.type === 'File' && parent.sourceInstanceName === 'posters') {
      const filePath = node.internal.contentFilePath;

      const content = {
        slug: node.frontmatter.slug,
        title: node.frontmatter.title,
        image: node.frontmatter.image,
        poster: node.frontmatter.poster,
        poster_id: node.frontmatter.poster_id,
        url: node.frontmatter.url,
        speakers: node.frontmatter.speakers,
        tags: node.frontmatter.tags,
        meta: node.frontmatter.meta,
        content: node,
      };

      createNode({
        id: createNodeId(`poster-post-${node.id}`),
        parent: node.id,
        children: [],
        internal: {
          type: 'Poster',
          contentFilePath: filePath,
          contentDigest: createContentDigest(content),
        },
        ...content,
      });
    }
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const blogTemplate = path.resolve('src/templates/blog.jsx');
  const talkTemplate = path.resolve('src/templates/talk.jsx');
  const speakerTemplate = path.resolve('src/templates/speaker.jsx');
  const posterTemplate = path.resolve('src/templates/poster.jsx');

  const result = await graphql(`
    {
      blogs: allBlog {
        nodes {
          slug
          internal {
            contentFilePath
          }
        }
      }
      speakers: allPeople {
        nodes {
          slug
          attending
          is_keynote
        }
      }
      events: allEvent {
        nodes {
          slug
          hasPage
          fullPath
          internal {
            contentFilePath
          }
        }
      }
      posters: allPoster {
        nodes {
          slug
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Build failed while running GraphQL query');
    return;
  }

  const eventPages = result.data.events.nodes.filter((event) => event.hasPage);
  eventPages.forEach((event) => {
    createPage({
      path: event.fullPath,
      component: `${talkTemplate}?__contentFilePath=${event.internal.contentFilePath}`,
      context: {
        slug: event.fullPath,
      },
    });
  });

  const blogs = result.data.blogs.nodes;
  blogs.forEach((blog) => {
    createPage({
      path: `/blog/${blog.slug}/`,
      component: `${blogTemplate}?__contentFilePath=${blog.internal.contentFilePath}`,
      context: {
        slug: blog.slug,
      },
    });
  });

  const posters = result.data.posters.nodes;
  posters.forEach((poster) => {
    createPage({
      path: `/barcelona/posters/${poster.slug}/`,
      component: `${posterTemplate}?__contentFilePath=${poster.internal.contentFilePath}`,
      context: {
        slug: poster.slug,
      },
    });
  });

  const speakers = result.data.speakers.nodes;

  speakers.forEach((speaker) => {
    let paths = ['/barcelona/speakers'];

    switch (speaker.attending) {
      case 'Boston':
        paths = ['/boston/speakers'];
        break;
      case 'Both':
        paths = ['/boston/speakers', '/barcelona/speakers'];
    }

    paths.forEach((path) => {
      createPage({
        path: `${path}${speaker.slug}`,
        component: speakerTemplate,
        context: {
          slug: speaker.slug,
        },
      });
    });
  });
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path == '/') {
    page.context.layout = 'Plain';
    createPage(page);
  }
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
