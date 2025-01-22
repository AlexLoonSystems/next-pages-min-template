import { IconCheck } from '@tabler/icons-react';
import { Button, Container, Group, Image, List, Text, ThemeIcon, Title } from '@mantine/core';
import classes from './Bullets.module.css';

export function Bullets() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            A <span className={classes.highlight}>modern</span> IT <br /> professional partner
          </Title>
          <Text mt="md">
          Whether your needs are immediate or you are seeking an affordable, dependable IT support partner, Loon Systems, Inc. is here for you. Our service plans offer the best solution for smaller organizations that still need comprehensive IT support. We work with you to determine a customized solution, allowing you to stay focused on promoting your business. 
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck size={12} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Minnesota based</b> – we are local and understand your needs
            </List.Item>
            <List.Item>
              <b>Cost effective first</b> – we will always try to find the most affordable solution to meet your needs
            </List.Item>
            <List.Item>
              <b>Equally friendly and professional</b> – at Loon Systems, we pride ourselves on our customer service
            </List.Item>
          </List>
        </div>
        <Image src="/image.svg" className={classes.image} alt='hero clipart'/>
      </div>
    </Container>
  );
}