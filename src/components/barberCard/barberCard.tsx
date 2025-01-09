import { Button } from "../button/button";
import { ImageBasePath } from "../image";
import "./barberCard.css";

export interface IBarberCard {
  name: string;
  imageSrc: string;
  description: string;
  bookingUrl: string;
}

export const BarberCard = (props: IBarberCard) => {
  const { name, imageSrc, description, bookingUrl } = props;
  return (
    <div className="barber-card">
      <ImageBasePath src={imageSrc} alt={`Picture of ${name}`} />
      <div className="barber-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <Button
          text={"Book"}
          url={bookingUrl}
          variant="outlined"
          size="medium"
        />
      </div>
    </div>
  );
};
