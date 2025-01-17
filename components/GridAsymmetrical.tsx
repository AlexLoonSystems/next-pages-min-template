import { Container, Grid, Skeleton } from '@mantine/core';
import Image from 'next/image';


const child = <Skeleton height={140} radius="md" animate={false} />;

export function GridAsymmetrical() {
  return (
    <Container my="md">
      <Grid>
        <Grid.Col span={{ base: 12, xs: 4 }}><Image src="/LenovoBP-POS-color.png" alt='Lenovo'/></Grid.Col>
        <Grid.Col span={{ base: 12, xs: 8 }}><Image src="/bigdog_dogtag.png" alt='Ruckus'/></Grid.Col>
        <Grid.Col span={{ base: 12, xs: 8 }}><Image src="/NETGEAR_Authorized_Reseller_Logo_color.jpg" alt='Netgear'/></Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}><Image src="/Unknown.jpg" alt='Netgear'/></Grid.Col>
        <Grid.Col span={{ base: 12, xs: 3 }}><Image src="/droppedImage.png" alt='Netgear'/></Grid.Col>
        <Grid.Col span={{ base: 12, xs: 3 }}><Image src="/SW_logo_the_power_to_manage_IT_RGB1.png" alt='Netgear'/></Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6 }}><Image src="/ioSafe_master_020107_small.jpg" alt='Netgear'/></Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6 }}><Image src="/ms-Registered-Refurb_cL.jpg" alt='Netgear'/></Grid.Col>
      </Grid>
    </Container>
  );
}