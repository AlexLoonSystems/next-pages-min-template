import { Container, Text } from '@mantine/core';
import classes from './Footer.module.css';


export function Footer() {

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text c="dimmed" size="sm">
        © 2025 Loon Systems, Inc. All Rights Reserved
        </Text>
      </Container>
    </div>
  );
}