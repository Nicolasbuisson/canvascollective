import { Schedule } from "@/components/schedule/schedule";
import { Location } from "@/components/location/location";
import { Hero } from "@/components/hero/hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Schedule />
      <Location />
    </div>
  );
}
