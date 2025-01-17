import { Button, Group } from "@mantine/core";
import { HeroContentLeft } from "../components/HeroContentLeft";
import { HeaderSimple } from "../components/HeaderSimple";
import { GridAsymmetrical } from "../components/GridAsymmetrical";

export default function PartnerPage() {
  return (
    <div>
      <HeaderSimple/>
        <Group mt={50} justify="center">
          <GridAsymmetrical/>
        </Group>
    </div>
  );
}
