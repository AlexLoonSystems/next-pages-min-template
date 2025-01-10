import { Button, Group } from "@mantine/core";
import { HeroContentLeft } from "../components/HeroContentLeft";
import { HeaderSimple } from "../components/HeaderSimple";

export default function PartnerPage() {
  return (
    <div>
      <HeaderSimple/>
        <Group mt={50} justify="center">
          <Button size="xl">Welcome to Partners!</Button>
        </Group>
    </div>
  );
}
