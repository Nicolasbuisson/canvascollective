import { Schedule } from "@/components/schedule/schedule";
import { Location } from "@/components/location/location";
import { Hero } from "@/components/hero/hero";
import { Reviews } from "@/components/reviews/reviews";

export default function Home() {
  return (
    <div>
      <Hero />
      <Schedule />
      <Location />
      <Reviews />
    </div>
  );
}
