import { TeamHoverGrid } from "@/components/teamHoverGrid/teamHoverGrid";
import "./about.css";
import { ImageBasePath } from "@/components/image";
import { BarberCard, IBarberCard } from "@/components/barberCard/barberCard";

export default function About() {
  const barbers: IBarberCard[] = [
    {
      name: "Kevin G.",
      imageSrc: "/team/KevinAvatar.PNG",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id odio id magna sodales sagittis vitae et enim. Vivamus dictum nec lacus vitae tempus. Phasellus rhoncus elit at orci rutrum euismod. Mauris porta metus non sagittis sodales.",
      bookingUrl:
        "https://getsquire.com/booking/book/canvas-collective-montreal/barber/kevin-gascon-1/services",
    },
    {
      name: "Phillipe L.",
      imageSrc: "/team/PhillipAvatar.PNG",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id odio id magna sodales sagittis vitae et enim. Vivamus dictum nec lacus vitae tempus. Phasellus rhoncus elit at orci rutrum euismod. Mauris porta metus non sagittis sodales.",
      bookingUrl:
        "https://getsquire.com/booking/book/canvas-collective-montreal/barber/philippe-leveille-1/services",
    },
    {
      name: "Jonathan D.",
      imageSrc: "/team/JonathanAvatar.PNG",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id odio id magna sodales sagittis vitae et enim. Vivamus dictum nec lacus vitae tempus. Phasellus rhoncus elit at orci rutrum euismod. Mauris porta metus non sagittis sodales.",
      bookingUrl:
        "https://getsquire.com/booking/book/canvas-collective-montreal/barber/jonathan-de-leon/services",
    },
    {
      name: "Steven D.",
      imageSrc: "/team/StevenAvatar.PNG",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id odio id magna sodales sagittis vitae et enim. Vivamus dictum nec lacus vitae tempus. Phasellus rhoncus elit at orci rutrum euismod. Mauris porta metus non sagittis sodales.",
      bookingUrl:
        "https://getsquire.com/booking/book/canvas-collective-montreal/barber/steven-de-leon-1/services",
    },
  ];
  return (
    <section className="about-section">
      <ImageBasePath
        src="/groupPhoto.png"
        className="group-photo"
        alt="picture of the 4 founders: Kevin, Phillip, Jonathan, Steven"
      />
      <h2>Meet the Team</h2>
      <div className="team-list">
        {barbers.map((barber) => {
          return (
            <BarberCard
              key={barber.name}
              name={barber.name}
              imageSrc={barber.imageSrc}
              description={barber.description}
              bookingUrl={barber.bookingUrl}
            />
          );
        })}
      </div>
      <TeamHoverGrid />
    </section>
  );
}
