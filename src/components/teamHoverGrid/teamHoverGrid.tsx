import { ImageBasePath } from "../image";
import "./teamHoverGrid.css";

export const TeamHoverGrid = () => {
  // can set hover state by default
  // by using state or some mouse event listeners...
  // element.addClass
  // element.removeClass
  return (
    <div className="team-grid">
      <ImageBasePath src="/team/KevinAvatar.PNG" className="avatar" />
      <ImageBasePath src="/team/PhillipAvatar.PNG" className="avatar" />
      <ImageBasePath src="/team/JonathanAvatar.PNG" className="avatar" />
      <ImageBasePath src="/team/StevenAvatar.PNG" className="avatar" />
    </div>
  );
};
