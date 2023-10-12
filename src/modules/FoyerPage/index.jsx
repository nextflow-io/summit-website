import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import SetTime from './SetTime';
import SponsoredBy from '../../components/SponsoredBy';
import NextflowLogo from './nextflow-logo.svg';
import Info from './Info';

import * as styles from './styles.module.css';

const FoyerPage = () => {
  const [secondsRemaining, setSecondsRemaining] = useState(undefined);

  useEffect(() => {
    function handleInterval() {
      setSecondsRemaining((t) => {
        if (typeof t === 'undefined') return undefined;
        if (t === 0) return undefined;
        return t - 1;
      });
    }
    const interval = setInterval(handleInterval, 1000);
    return () => clearInterval(interval);
  }, []);

  if (typeof secondsRemaining === 'undefined') return <SetTime setSecondsRemaining={setSecondsRemaining} />;

  let minutes = Math.floor(secondsRemaining / 60);
  let seconds = secondsRemaining - minutes * 60;
  if (String(seconds).length === 1) seconds = '0' + seconds;

  return (
    <div className={classNames('flex flex-col h-screen absolute inset-0', styles.body)}>
      <div className="bg-blue-500 p-4 flex-none flex items-center justify-center">
        <img src={NextflowLogo} className="h-6 inline-block mr-2" alt="Nextflow" />
        <span className="text-white text-xl font-bold">SUMMIT 2023</span>
      </div>
      <div className="flex-auto flex items-center">
        <div className="w-1/3 pl-20 lg:pl-40">
          <Info />
        </div>
        <div className="w-2/3 text-center p-20 lg:p-40">
          <div className="text-7xl font-bold text-white mb-4">Next session starts in</div>
          <div style={{ fontSize: '8rem' }} className="font-bold text-green-300 leading-none">
            {minutes}:{seconds}
          </div>
        </div>
      </div>
      <div className="bg-grey-800 p-4 flex-none">
        <SponsoredBy alt />
      </div>
    </div>
  );
};

export default FoyerPage;
