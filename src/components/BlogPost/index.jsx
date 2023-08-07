import React from 'react';
import { Link } from 'website-components';
import { prettyDate } from '../../utils/dateFormat';

import * as styles from './styles.module.css';
import classNames from 'classnames';

const BlogPost = ({ blog }) => {
  return (
    <Link
      to={`/blog/${blog.slug}`}
      resetClassName={classNames(styles.container, 'block bg-black border border-gray-700 rounded-lg p-8')}
    >
      <h3 className="typo-h4 text-white mb-8">{blog.title}</h3>
      {blog.meta.description}
      <div className="pt-8">
        <span className="text-green-300 font-extrabold">{blog.author}</span>
        {' | '}
        <span className="">{prettyDate(blog.datetime)}</span>
      </div>
    </Link>
  );
};
export default BlogPost;
