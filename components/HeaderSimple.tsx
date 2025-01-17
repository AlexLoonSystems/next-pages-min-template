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
  { link: '/reviews', label: 'Reviews' },
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

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Image src="/LoonLogo.jpg" alt="Loon logo" width={100} height={30} />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}