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
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  // keep
};

exports.onCreatePage = async ({ page, actions }) => {
  // keep
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
