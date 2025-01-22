import { Button, Container, Text, Title } from '@mantine/core';
import { useRouter } from 'next/router';
import classes from './HeroRight.module.css';

export function HeroRight() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/contact');
  };  

  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              When{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
              >
                something does not work,
              </Text>{' '}
              how can you focus on what really matters...
            </Title>

            <Text className={classes.description} mt={30}>
            As a graduate of Dunwoody’s Electrical Program in 2006, I began my career working for a home theater installation company with strong attention to detail.  After several years of witnessing the disconnect between what was often “sold” versus actually implemented, Loon Systems was born. As our business has expanded over the years, our core values have never changed. We pride ourselves with integrity, and do our best deliver our promises.
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="xl"
              className={classes.control}
              mt={40}
              onClick={handleButtonClick}
            >
              Get started
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}