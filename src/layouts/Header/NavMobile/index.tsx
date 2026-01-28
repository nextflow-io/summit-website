import { useState } from 'react';
import clsx from 'clsx';
import Button from '@components/Button';
import styles from './styles.module.css';
import Hamburger from './Hamburger';
import DropDowns from './DropDowns/DropDowns';
import useMediaQuery from '@utils/useMediaQuery';
import Logo from '../Logo';

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
    buttonLink?: string;
    buttonUrl?: string;
    externalLink?: boolean;
  };
  mobileButton2?: {
    buttonText?: string;
    buttonLink?: string;
    buttonUrl?: string;
    externalLink?: boolean;
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
                  href={
                    mobileButton.buttonUrl.externalUrl ||
                    mobileButton.buttonUrl.internalLink
                  }
                  target={mobileButton.isExternal ? '_blank' : '_self'}
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
                  href={
                    mobileButton2.buttonUrl.externalUrl ||
                    mobileButton2.buttonUrl.internalLink
                  }
                  target={mobileButton2.isExternal ? '_blank' : '_self'}
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
