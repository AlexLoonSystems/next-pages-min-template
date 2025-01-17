import { Button, Group } from "@mantine/core";
import { HeroContentLeft } from "../components/HeroContentLeft";
import { HeaderSimple } from "../components/HeaderSimple";
import { CardsCarousel } from "../components/CardsCarousel";
import { CommentSimple } from "../components/CommentSimple";

export default function ReviewsPage() {
  return (
    <div>
      <HeaderSimple/>
        <Group mt={50} justify="center">
          <CommentSimple/>
        </Group>
    </div>
  );
}
