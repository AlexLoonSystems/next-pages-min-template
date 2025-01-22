import { Button, Group } from "@mantine/core";
import { HeroContentLeft } from "../components/HeroContentLeft";
import { HeaderSimple } from "../components/HeaderSimple";
import { CardsCarousel } from "../components/CardsCarousel";
import { CommentSimple } from "../components/CommentSimple";
import { HeroRight } from "../components/HeroRight";

export default function ReviewsPage() {
  return (
    <div>
      <HeaderSimple/>
        <Group mt={50} justify="center">
          <HeroRight/>
          {/* <CommentSimple/> */}
        </Group>
    </div>
  );
}
