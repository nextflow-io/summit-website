import React, { useEffect, useState } from 'react';

import data from './data';

import * as styles from './styles.module.css';
import classNames from 'classnames';

const DidYouKnow = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  useEffect(() => {
    const count = data.length;
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentItem((i) => (i + 1) % count);
        setFadeOut(false);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="text-3xl font-bold text-blue-500 mb-4">Did you know?</div>
      <div className={classNames('text-3xl font-bold text-white mb-4', styles.info, { [styles.fadeout]: fadeOut })}>
        {data[currentItem]}
      </div>
    </div>
  );
};

export default DidYouKnow;
