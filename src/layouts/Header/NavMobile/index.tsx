import { useState, useEffect } from 'react';
import clsx from 'clsx';
import Button from '@components/Button';
import styles from './styles.module.css';
import Hamburger from './Hamburger';
import DropDowns from './DropDowns/DropDowns';
import useMediaQuery from '@utils/useMediaQuery';
import Logo from '../Logo';
import { formatLink } from '@utils/linkFormatter';

type Link = {
  isExternal?: boolean;
  internalLink?: string;
  externalUrl?: string;
};

type MenuLink = {
  linkTitle: string;
  link?: Link;
};

type SingleLink = {
  _type: 'singleLink';
  linkTitle: string;
  link?: Link;
};

type MenuGroup = {
  _type: 'menuGroup';
  menuTitle: string;
  menuLinks?: MenuLink[];
};

type MobileMenuItem = SingleLink | MenuGroup;

type Props = {
  namespace: string;
  pathname: string;
  showNav?: boolean;
  mobileMenu?: MobileMenuItem[];
  mobileButton?: {
    buttonText?: string;
    buttonUrl?: {
      isExternal?: boolean;
      externalUrl?: string;
      internalLink?: string;
    };
  };
  mobileButton2?: {
    buttonText?: string;
    buttonUrl?: {
      isExternal?: boolean;
      externalUrl?: string;
      internalLink?: string;
    };
  };
};

const NavMobile: React.FC<Props> = ({
  pathname,
  namespace,
  showNav,
  mobileMenu,
  mobileButton,
  mobileButton2,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 'sm' });

  // Lock/unlock body scroll when menu opens/closes (mobile only)
  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isOpen, isMobile]);

  if (!isMobile) return null;

  return (
    <div>
      <header
        id="headerMobile"
        className={clsx(styles.navMobile, { [styles.open]: isOpen })}
      >
        <div className={styles.header}>
          <Logo namespace={namespace} />
          <Hamburger setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
        {isOpen && (
          <div
            className={clsx(styles.navDropdown, { [styles.openDD]: isOpen })}
          >
            <DropDowns
              pathname={pathname}
              namespace={namespace}
              mobileMenu={mobileMenu}
            />

            {mobileButton && (
              <div className="container">
                <Button
                  className="relative w-full mt-5"
                  light
                  href={formatLink(mobileButton.buttonUrl)}
                  target={mobileButton.buttonUrl?.isExternal ? '_blank' : '_self'}
                >
                  {mobileButton.buttonText}
                </Button>
              </div>
            )}

            {mobileButton2 && (
              <div className="container">
                <Button
                  className="relative w-full mt-3"
                  light
                  href={formatLink(mobileButton2.buttonUrl)}
                  target={mobileButton2.buttonUrl?.isExternal ? '_blank' : '_self'}
                >
                  {mobileButton2.buttonText}
                </Button>
              </div>
            )}
          </div>
        )}
      </header>
      <div className="md:h-[76px]"></div>
    </div>
  );
};

export default NavMobile;