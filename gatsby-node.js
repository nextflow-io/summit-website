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
        meta: MetaFields
      }
    `,
    `
      type Event implements Node {
				type: String
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
      const content = {
        type: parent.sourceInstanceName,
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
        hasPage: node.frontmatter.hasPage,
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
  // const eventTemplate = path.resolve('src/templates/event.jsx');
  // const talkTemplate = path.resolve('src/templates/talk.jsx');
  const speakerTemplate = path.resolve('src/templates/speaker.jsx');
  // const posterTemplate = path.resolve('src/templates/poster.jsx');

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
        }
      }
      events: allEvent {
        nodes {
          slug
          hasPage
        }
      }
      posters: allPoster {
        nodes {
          slug
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Build failed while running GraphQL query');
    return;
  }

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

  // const events = result.data.events.nodes;

  // events.forEach((event) => {
  //   if (event.hasPage) {
  //     createPage({
  //       path: `/hackathon/${event.slug}/`,
  //       component: eventTemplate,
  //       context: {
  //         slug: event.slug,
  //       },
  //     });
  //   }
  // });

  // const posters = result.data.posters.nodes;

  // posters.forEach((poster) => {
  //   createPage({
  //     path: `/posters/${poster.slug}/`,
  //     component: posterTemplate,
  //     context: {
  //       slug: poster.slug,
  //     },
  //   });
  // });
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
