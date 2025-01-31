import { Button, Group } from "@mantine/core";
import { HeaderSimple } from "../components/HeaderSimple";
import { GetInTouch } from "../components/GetinTouch";
import { Footer } from "../components/Footer";


export default function ContactPage() {
  return (
    <div>
      <HeaderSimple/>
        <Group mt={50} justify="center">
          <GetInTouch />
        </Group>
      <Footer/>
    </div>
  );
}
