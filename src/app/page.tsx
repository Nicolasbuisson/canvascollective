import { Schedule } from "@/components/schedule/schedule";
import styles from "./page.module.css";
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
