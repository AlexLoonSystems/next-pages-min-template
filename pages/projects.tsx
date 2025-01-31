import { Group } from "@mantine/core";
import { HeaderSimple } from "../components/HeaderSimple";
import { CardsCarousel } from "../components/CardsCarousel";
import { Footer } from "../components/Footer";
import styles from './index.module.css';


export default function PartnerPage() {
  return (
    <div className={styles.background}>
      <HeaderSimple/>
        <Group mt={50} justify="center">
          <CardsCarousel/>
        </Group>
      <Footer/>
    </div>
  );
}
