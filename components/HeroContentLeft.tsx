import { Button, Container, Overlay, Text, Title } from '@mantine/core';
import classes from './HeroContentLeft.module.css';

export function HeroContentLeft() {
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>Loon Systems is a dynamic IT management company dedicated to providing helpful, fast, and reliable solutions</Title>
        <Text className={classes.description} size="xl" mt="xl">
        Specializing in both business and residential environments, Loon Systems consistently goes above and beyond to ensure clients receive exceptional support tailored to their unique needs. Whether addressing complex technical challenges or streamlining everyday IT operations, Loon Systems is committed to delivering excellence and peace of mind.
        </Text>

        <Button variant="gradient" size="xl" radius="xl" className={classes.control}>
          Get started
        </Button>
      </Container>
    </div>
  );
}