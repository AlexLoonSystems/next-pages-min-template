import { AspectRatio, Card, Container, Image, SimpleGrid, Text } from '@mantine/core';
import classes from './CardsCarousel.module.css';

const projectdata = [
  {
    title: 'This is a sample project title',
    image:
      '/project1.png',
    date: 'August 18, 2024',
  },
  {
    title: 'Here is another sample project title',
    image:
      '/project2.jpg',
    date: 'August 17, 2022',
  },
  {
    title: 'Here is a third sample project title',
    image:
      '/project3.png',
    date: 'May 9, 2023',
  },
  {
    title: 'And a fourth sample project title',
    image:
      '/project4.png',
    date: 'September 12, 2022',
  },
  // {
  //   title: 'And a fifth sample project title',
  //   image:
  //     '/project5.png',
  //   date: 'September 12, 2022',
  // },
  // {
  //   title: 'And a 6th sample project title',
  //   image:
  //     '/project6.png',
  //   date: 'September 12, 2022',
  // },
];

export function CardsCarousel() {
  const cards = projectdata.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Container py="xl">
      <h1 className={classes.titlehead}>
        Some of our previous projects    
      </h1>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </Container>
  );
}