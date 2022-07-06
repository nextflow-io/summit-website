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
    `
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
      const peopleContent = {
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
          contentDigest: createContentDigest(peopleContent),
        },
        ...peopleContent,
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
