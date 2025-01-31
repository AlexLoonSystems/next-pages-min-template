import { Button, Container, Overlay, Text, Title } from '@mantine/core';
import { useRouter } from 'next/router';
import classes from './HeroContentLeft.module.css';

export function HeroContentLeft() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/contact');
  };

  return (
    <div className={classes.hero}>
      <Overlay
        style={{ borderRadius: '40px'}}
        gradient="linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>Loon Systems is a technology management company dedicated to providing helpful and reliable solutions</Title>
        <Text className={classes.description} size="xl" mt="xl">
        Specializing in both business and residential environments, Loon Systems consistently goes above and beyond to ensure clients receive exceptional support tailored to their unique needs. Whether addressing complex technical challenges or streamlining everyday IT operations, Loon Systems is committed to delivering excellence and peace of mind.
        </Text>

        <Button
          variant="gradient"
          size="xl"
          radius="xl"
          className={classes.control}
          onClick={handleButtonClick}
        >
          Get started
        </Button>
      </Container>
    </div>
  );
}