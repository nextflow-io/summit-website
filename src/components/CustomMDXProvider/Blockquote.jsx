import React from 'react';
import PropTypes from '../../utils/PropTypes';

const Blockquote = ({ children, caption }) => (
  <figure className="bg-gray-50 p-4 sm:p-6 border-indigo-600 border-l-4">
    <blockquote>
      <p className="typo-body">{children}</p>
    </blockquote>
    {caption && <figcaption className="italic mt-4 text-sm">{caption}</figcaption>}
  </figure>
);

Blockquote.propTypes = {
  children: PropTypes.node,
  caption: PropTypes.string,
};

Blockquote.defaultPropts = {
  children: null,
  caption: '',
};

export default Blockquote;
