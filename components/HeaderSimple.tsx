import { useState, useEffect} from 'react';
import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSimple.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';


const links = [
  { link: '/', label: 'Home' },
  { link: '/contact', label: 'Contact' },
  { link: '/partners', label: 'Partners' },
  { link: '/background', label: 'Background' },
  { link: '/projects', label: 'Projects' },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const router = useRouter();
  const [active, setActive] = useState(router.pathname);

  useEffect(() => {
    setActive(router.pathname);
  }, [router.pathname]);

  const items = links.map((link) => (
    <Link key={link.label} href={link.link} passHref>
        <a
        key={link.label}
        href={link.link}
        className={classes.link}
        data-active={active === link.link || undefined}
        onClick={(event) =>  setActive(link.link)}
        >
        {link.label}
        </a>
    </Link>
  ));

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
      <Image
          src="/LoonLogo.jpg"
          alt="Loon logo"
          onClick={handleLogoClick}
          style={{ cursor: 'pointer', width: '150px', height: 'auto' }} // Adjust width and height as needed
        />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        <div className={`${classes.burgerMenu} ${opened ? classes.open : ''}`}>
          {items}
        </div>
      </Container>
    </header>
  );
}