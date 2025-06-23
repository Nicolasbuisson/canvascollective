import { Button } from "../button/button";
import { Socials } from "../socials/socials";
import "./stickyFooter.css";

export const StickyFooter = () => {
  return (
    <footer>
      <div className="sticky-footer-container">
        <h2>Look Your Most Confident</h2>
        <Button
          text={"Book Now"}
          url={"https://getsquire.com/booking/brands/canvas-collective"}
          size="big"
        />
        <div className="footer-items">
          <span className="copyright">© 2025 Canvas Collective</span>
          <Socials />
        </div>
      </div>
    </footer>
  );
};
