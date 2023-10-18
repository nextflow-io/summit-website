import React from 'react';

import * as styles from './styles.module.css';

const TitleScreen = ({ setTitle, title }) => {
  function handleClick() {
    setTitle(undefined);
  }
  return (
    <div className={'flex-auto flex items-center justify-center w-[100vw] h-[100vh] ' + styles.body}>
      <button type="button" onClick={handleClick} className={styles.button}>
        x
      </button>
      <div className="text-center p-20">
        <h1 className="text-8xl text-white leading-tight">{title}</h1>
      </div>
    </div>
  );
};

export default TitleScreen;
