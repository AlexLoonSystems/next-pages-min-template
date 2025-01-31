import { Button, Group } from "@mantine/core";
import { HeroContentLeft } from "../components/HeroContentLeft";
import { HeaderSimple } from "../components/HeaderSimple";
import { FaqSection } from "../components/FaqSection";
import { Bullets } from "../components/Bullets";
import { Footer } from "../components/Footer";
import styles from './index.module.css';


export default function IndexPage() {
  return (
    <div className={styles.background}>
      <HeaderSimple/>
      <Group mt={50} justify="center">
        <HeroContentLeft />
      </Group>
      <Bullets />
      <FaqSection />
      <Footer/>
    </div>
  );
}
