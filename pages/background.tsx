import { Button, Group } from "@mantine/core";
import { HeaderSimple } from "../components/HeaderSimple";
import { HeroRight } from "../components/HeroRight";
import { Footer } from "../components/Footer";
import styles from './index.module.css';



export default function BackgroundPage() {
  return (
    <div className={styles.background}>
      <HeaderSimple/>
        <Group mt={50} justify="center">
          <HeroRight/>
        </Group>
      <Footer/>
    </div>
  );
}
