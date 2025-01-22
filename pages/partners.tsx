import { Button, Group } from "@mantine/core";
import { HeroContentLeft } from "../components/HeroContentLeft";
import { HeaderSimple } from "../components/HeaderSimple";
import { PartnerGrid } from "../components/PartnerGrid";

export default function PartnerPage() {
  return (
    <div>
      <HeaderSimple/>
        <Group mt={50} justify="center">
          <PartnerGrid/>
        </Group>
    </div>
  );
}
