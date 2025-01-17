import { Button, Group } from "@mantine/core";
import { HeroContentLeft } from "../components/HeroContentLeft";
import { HeaderSimple } from "../components/HeaderSimple";

export default function IndexPage() {
  return (
    <div>
      <HeaderSimple/>
        <Group mt={50} justify="center">
          <HeroContentLeft />
          <Button size="xl">Welcome to Loon!</Button>
        </Group>
    </div>
  );
}
