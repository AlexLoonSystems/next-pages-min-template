import { Button, Group } from "@mantine/core";
import { HeaderSimple } from "../components/HeaderSimple";
import { GetInTouch } from "../components/GetinTouch";
import { Footer } from "../components/Footer";
import styles from './index.module.css';



export default function ContactPage() {
  return (
    <div className={styles.background}>
      <HeaderSimple/>
        <Group mt={50} justify="center">
          <GetInTouch />
        </Group>
      <Footer/>
    </div>
  );
}
