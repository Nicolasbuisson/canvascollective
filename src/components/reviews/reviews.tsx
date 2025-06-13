import { config } from "@/config/config";
import { IGoogleReview, ReviewCard } from "./reviewCard";
import "./reviews.css";

interface IGoogleReviews {
  result: { reviews: IGoogleReview[] };
}

export const Reviews = async () => {
  let jsonData: IGoogleReviews = { result: { reviews: [] } };
  try {
    const data = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${config.PLACE_ID}&key=${config.GOOGLE_API_KEY}&fields=reviews`
    );
    jsonData = await data.json();
  } catch (error) {
    console.log("Error fetching Google reviews:" + error);
  }

  return jsonData.result.reviews.length < 1 ? (
    <></>
  ) : (
    <section className="review-section">
      <h2>Listen to what our clients have to say</h2>
      <div className="reviews-container">
        {jsonData.result.reviews.map((review: IGoogleReview) => {
          return (
            <ReviewCard
              key={review.author_name}
              author_name={review.author_name}
              profile_photo_url={review.profile_photo_url}
              rating={review.rating}
              relative_time_description={review.relative_time_description}
              text={review.text}
            />
          );
        })}
      </div>
    </section>
  );
};
