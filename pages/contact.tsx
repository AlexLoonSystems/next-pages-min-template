import { Button, Group } from "@mantine/core";
import { HeroContentLeft } from "../components/HeroContentLeft";
import { HeaderSimple } from "../components/HeaderSimple";
import { GetInTouch } from "../components/GetinTouch";

export default function ContactPage() {
  return (
    <div>
      <HeaderSimple/>
        <Group mt={50} justify="center">
          <GetInTouch />
        </Group>
    </div>
  );
}
