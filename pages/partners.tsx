import { Button, Group } from "@mantine/core";
import { HeaderSimple } from "../components/HeaderSimple";
import { PartnerGrid } from "../components/PartnerGrid";
import { Footer } from "../components/Footer";
import styles from './index.module.css';



export default function PartnerPage() {
  return (
    <div className={styles.background}>
      <HeaderSimple/>
        <Group mt={50} justify="center">
          <PartnerGrid/>
        </Group>
      <Footer/>
    </div>
  );
}
