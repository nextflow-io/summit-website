import { useState } from 'react';
import classnames from 'classnames';
import Button from '@components/Button';
import { motion } from 'framer-motion';
import { readCookie, writeCookie } from '@utils/cookies';

const CookieBanner = () => {
  const key = 'preferencesSet';
  const preferencesSet = readCookie(key);
  const [isVisible, setIsVisible] = useState(preferencesSet !== 'true');

  const acceptAll = () => {
    const sixMonths = 30 * 6;
    writeCookie(key, 'true', sixMonths);
    setIsVisible(false);
    if (typeof window === 'undefined') return;
    if (!window.dataLayer) window.dataLayer = [];
    if (!window.gtag)
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
    window.gtag('consent', 'update', {
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      ad_storage: 'granted',
      analytics_storage: 'granted',
    });
  };

  const denyAll = () => {
    writeCookie(key, 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        ease: 'linear',
        delay: 1.4,
      }}
      viewport={{
        once: true,
      }}
      className={classnames(
        'bg-[#EBEBEB] text-black text-xs fixed bottom-0 w-full z-[2147483648] py-4 border-t border-black/5',
        {
          hidden: !isVisible,
        }
      )}
    >
      <div className="container-xl">
        <div className="flex items-center justify-between flex-wrap -my-2 lg:mx-0">
          <div className="flex items-center py-2 md:pr-4 opacity-90">
            <div className="flex-auto">
              This website uses cookies to offer you a better browsing
              experience.&nbsp;
              <br className="hidden md:block" />
              Find out more on{' '}
              <a href="/privacy-policy/" className="underline">
                how we use cookies
              </a>
              .
            </div>
          </div>
          <div className="py-2">
            <div className="flex flex-wrap -mx-2 -my-1">
              <div className="px-2 py-1">
                <Button light outline onClick={denyAll}>
                  Essential only
                </Button>
              </div>
              <div className="px-2 py-1">
                <Button light outline onClick={acceptAll}>
                  Accept all cookies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CookieBanner;
