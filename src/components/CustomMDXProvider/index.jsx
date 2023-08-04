import classnames from 'classnames';
import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import { onlyText } from 'react-children-utilities';
import { Button, Link, List } from 'website-components';

import PropTypes from '../../utils/PropTypes';
import Blockquote from './Blockquote';
import YoutubeIframe from '../YoutubeIframe';
import * as styles from './CustomMDXProvider.module.css';
import { toKebabCase } from './toKebabCase';

const toAnchor = (children) => {
  return toKebabCase(onlyText(children));
};

const basicPropTypes = {
  children: PropTypes.node,
};
const basicDefaultProps = {
  children: null,
};

const linkPropTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
};
const linkDefaultProps = {
  children: null,
  href: null,
};

const buttonPropTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
};
const buttonDefaultProps = {
  children: null,
  to: null,
};

const Heading2 = ({ children }) => (
  <h2 id={toAnchor(children)} className="typo-h3">
    <a href={`#${toAnchor(children)}`}>{children}</a>
  </h2>
);
Heading2.propTypes = basicPropTypes;
Heading2.defaultProps = basicDefaultProps;

const Heading3 = ({ children }) => (
  <h3 id={toAnchor(children)} className="typo-h4">
    <a href={`#${toAnchor(children)}`}>{children}</a>
  </h3>
);
Heading3.propTypes = basicPropTypes;
Heading3.defaultProps = basicDefaultProps;

const Heading4 = ({ children }) => (
  <h4 id={toAnchor(children)} className="typo-h4">
    <a href={`#${toAnchor(children)}`}>{children}</a>
  </h4>
);
Heading4.propTypes = basicPropTypes;
Heading4.defaultProps = basicDefaultProps;

const Heading5 = ({ children }) => (
  <h5 id={toAnchor(children)} className="typo-h5">
    <a href={`#${toAnchor(children)}`}>{children}</a>
  </h5>
);
Heading5.propTypes = basicPropTypes;
Heading5.defaultProps = basicDefaultProps;

const Heading6 = ({ children }) => (
  <h6 id={toAnchor(children)} className="typo-h6">
    <a href={`#${toAnchor(children)}`}>{children}</a>
  </h6>
);
Heading6.propTypes = basicPropTypes;
Heading6.defaultProps = basicDefaultProps;

const Intro = ({ children }) => <b className="typo-intro">{children}</b>;
Intro.propTypes = basicPropTypes;
Intro.defaultProps = basicDefaultProps;

const Paragraph = ({ children }) => <p className="typo-body font-light">{children}</p>;
Paragraph.propTypes = basicPropTypes;
Paragraph.defaultProps = basicDefaultProps;

const CustomList = ({ children }) => <List className="mt-4">{children}</List>;
CustomList.propTypes = basicPropTypes;
CustomList.defaultProps = basicDefaultProps;

const CustomOrderedlist = ({ children }) => (
  <List className="mt-4" as="ol" iconClassName="text-indigo-600">
    {children}
  </List>
);
CustomOrderedlist.propTypes = basicPropTypes;
CustomOrderedlist.defaultProps = basicDefaultProps;

const CustomListItem = ({ children, ...props }) => (
  <List.Item className="mt-4 typo-body" {...props}>
    {children}
  </List.Item>
);
CustomListItem.propTypes = basicPropTypes;
CustomListItem.defaultProps = basicDefaultProps;

const CustomTable = ({ children, className }) => (
  <div className={classnames('overflow-x-auto my-4', className)}>
    <table>{children}</table>
  </div>
);
CustomTable.propTypes = basicPropTypes;
CustomTable.defaultProps = basicPropTypes;

const InlineLink = ({ href, children }) => (
  <Link to={href} className="text-indigo-600">
    {children}
  </Link>
);
InlineLink.propTypes = linkPropTypes;
InlineLink.defaultProps = linkDefaultProps;

const StandaloneLink = ({ to, children, ...rest }) => (
  <Button to={to} className="my-4" variant="primary" size="md" {...rest}>
    {children}
  </Button>
);
StandaloneLink.propTypes = buttonPropTypes;
StandaloneLink.defaultProps = buttonDefaultProps;

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const Pre = ({ children }) => <pre className="block bg-gray-50 rounded-md p-6 overflow-x-auto">{children}</pre>;
Pre.propTypes = basicPropTypes;
Pre.defaultProps = basicDefaultProps;

const Code = ({ children }) => <code className="inline-block bg-gray-50 px-2">{children}</code>;
Code.propTypes = basicPropTypes;
Code.defaultProps = basicDefaultProps;

const CustomMDXProvider = ({ children }) => (
  <>
    <MDXProvider
      components={{
        h1: Heading2,
        h2: Heading2,
        h3: Heading3,
        h4: Heading4,
        h5: Heading5,
        h6: Heading6,
        p: Paragraph,
        ul: CustomList,
        ol: CustomOrderedlist,
        li: CustomListItem,
        a: InlineLink,
        b: Intro,
        strong: Intro,
        Button: StandaloneLink,
        Table: CustomTable,
        blockquote: Blockquote,
        Blockquote: Blockquote,
        YoutubeIframe: YoutubeIframe,
        pre: Pre,
        code: Code,
      }}
    >
      <div className={styles.content}>{children}</div>
    </MDXProvider>
  </>
);

CustomMDXProvider.propTypes = propTypes;
CustomMDXProvider.defaultProps = defaultProps;

export default CustomMDXProvider;
