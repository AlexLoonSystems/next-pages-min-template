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
        {/* Matt Key: Here is where the partner icons can be added or removed.  The matching named icon must be in the public folder in the root of the project.  */}
        {/* If an icon is too tall and getting cutoff with the image class, then use the imageTall class as the classname in the image. */}
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