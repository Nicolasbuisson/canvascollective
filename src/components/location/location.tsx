import "./location.css";

export const Location = () => {
  return (
    <section className="location-section">
      <hr />
      <h2>Downtown Montreal Location</h2>
      <p>372 Saint-Catherine St W #405, Montreal, Quebec H3B 1A2</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.2174253807348!2d-73.5671492!3d45.5057016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91b2c3c2b79f7%3A0xf45461e87799b0e3!2sCanvas%20Collective!5e0!3m2!1sen!2sca!4v1736202974622!5m2!1sen!2sca"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="location-map"
      />
    </section>
  );
};
