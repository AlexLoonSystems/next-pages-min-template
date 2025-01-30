import { Container, Grid, Text } from '@mantine/core';
import Image from 'next/image';
import styles from './PartnerGrid.module.css';


export function PartnerGrid() {
  return (
    <Container my="md">
      <h1 className={styles.title}>
          Companies that we are{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
            proud
          </Text>{' '}
          to partner with
        </h1>
      <Grid>
        <Grid.Col span={{ base: 12, xs: 12 }} className={styles.grid}><Image src="/Sonicwall.svg" alt='Sonicwall' className={styles.image}/></Grid.Col>
        <Grid.Col span={{ base: 12, xs: 12}} className={styles.gridCol}><Image src="/ionos.png" alt='Ionos' className={styles.image}/></Grid.Col>
        <Grid.Col span={{ base: 12, xs: 12}} className={styles.gridCol}><Image src="/n-able.png" alt='nable' className={styles.image}/></Grid.Col>
        <Grid.Col span={{ base: 12, xs: 12 }} className={styles.gridCol}><Image src="/ioSafe.jpg" alt='ioSafe' className={styles.image}/></Grid.Col>
        <Grid.Col span={{ base: 12, xs: 12 }} className={styles.gridCol}><Image src="/apc.png" alt='APC' className={styles.imageTall}/></Grid.Col>
        <Grid.Col span={{ base: 12, xs: 12}} className={styles.gridCol}><Image src="/Lenovo.jpg" alt='Lenovo' className={styles.image} /></Grid.Col>
        <Grid.Col span={{ base: 12, xs: 12}} className={styles.gridCol}><Image src="/netgear-logo-black.png" alt='Netgear' className={styles.image}/></Grid.Col>
        <Grid.Col span={{ base: 12, xs: 12 }} className={styles.gridCol}><Image src="/ruckus-logo-black-orange.svg" alt='Ruckus' className={styles.image}/></Grid.Col>
      </Grid>
    </Container>
  );
}