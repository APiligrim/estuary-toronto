import EstuarySVG from '@root/components/EstuarySVG';
import styles from '@components/Navbar.module.scss';
import * as React from 'react';
import { BreakpointEnum, useBreakpoint } from './utils/use-breakpoint';
import Button from './Button';

const navItems = [{ name: 'Apply for an Invite', href: '/apply' }];

function MobileNav({ navItems }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const breakpoint = useBreakpoint();

  React.useEffect(() => {
    const isMobile = breakpoint === BreakpointEnum.XS || breakpoint === BreakpointEnum.SM;

    if (!isMobile) {
      setIsOpen(false);
    }
  }, [breakpoint]);

  return (
    <div className={styles.displayMobileNav}>
      <a className={styles.navBranding} href="https://estuary.tech/" target="_blank">
        <EstuarySVG height="64px" color="var(--text-white)" className={styles.logo} />
      </a>

      <div className={isOpen ? styles.activeMobileMenu : styles.mobileMenu} aria-label="Open Navigation" onClick={() => setIsOpen((prev) => !prev)} />

      <ul className={isOpen ? styles.activeSideNav : styles.sideNav} onClick={() => setIsOpen((prev) => !prev)}>
        {navItems.map((item, index) => {
          return (
            <li key={index} className={styles.navItemMobile}>
              <a className={styles.navLink} href={`${item.href}`}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function DesktopNav({ navItems }) {
  return (
    <div className={styles.navbar}>
      <a href={'/'} style={{ textDecoration: 'none', color: 'var(--color-green)', fontFamily: 'Parabole', fontSize: '28px', letterSpacing: '.1rem', cursor: 'pointer' }}>
        ✦ party.estuary.tech ✦
      </a>

      <ul className={styles.navMenu}>
        {navItems.map((item, index) => {
          if (navItems.length > 1) {
            return (
              <>
                <li key={index} className={styles.navItem}>
                  <a className={styles.navLink} href={`${item.href}`}>
                    {item.name}
                  </a>
                </li>
              </>
            );
          } else {
            return (
              <>
                <Button className={styles.navItem}>
                  <a style={{ textDecoration: 'none', color: 'black' }} href={`${item.href}`}>
                    {item.name}
                  </a>
                </Button>
              </>
            );
          }
        })}
      </ul>
    </div>
  );
}

function Navbar(props: any) {
  return (
    <nav className={styles.stickyNavbar}>
      <MobileNav navItems={navItems} />
      <DesktopNav navItems={navItems} />
    </nav>
  );
}

export default Navbar;
