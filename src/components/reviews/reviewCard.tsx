import Image from "next/image";
import "./reviewCard.css";

export interface IGoogleReview {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
}

export const ReviewCard = (props: IGoogleReview) => {
  const {
    author_name,
    profile_photo_url,
    rating,
    relative_time_description,
    text,
  } = props;
  return rating < 4 ? (
    // if rating 3 or below, display nothing
    <></>
  ) : (
    <div className="review-card">
      <div className="rating">
        {Array.from({ length: rating }).map((r, i) => {
          return (
            <svg
              key={`${author_name} rating${i}`}
              version="1.0"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 64 64"
              enableBackground="new 0 0 64 64"
              xmlSpace="preserve"
              fill="#000000"
              transform="rotate(0)"
              stroke="#000000"
              strokeWidth="0.00064"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="1.024"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#f2de02"
                  d="M63.893,24.277c-0.238-0.711-0.854-1.229-1.595-1.343l-19.674-3.006L33.809,1.15 C33.479,0.448,32.773,0,31.998,0s-1.48,0.448-1.811,1.15l-8.815,18.778L1.698,22.935c-0.741,0.113-1.356,0.632-1.595,1.343 c-0.238,0.71-0.059,1.494,0.465,2.031l14.294,14.657L11.484,61.67c-0.124,0.756,0.195,1.517,0.822,1.957 c0.344,0.243,0.747,0.366,1.151,0.366c0.332,0,0.666-0.084,0.968-0.25l17.572-9.719l17.572,9.719c0.302,0.166,0.636,0.25,0.968,0.25 c0.404,0,0.808-0.123,1.151-0.366c0.627-0.44,0.946-1.201,0.822-1.957l-3.378-20.704l14.294-14.657 C63.951,25.771,64.131,24.987,63.893,24.277z"
                ></path>
              </g>
            </svg>
          );
        })}
      </div>

      <p>{`❝${text}❞`}</p>
      <div className="reviewer-info">
        <Image
          src={profile_photo_url}
          alt={"profile picture of reviewer " + author_name}
          width={64}
          height={64}
        />
        <div>
          <h4>{author_name}</h4>
          <p>{relative_time_description}</p>
        </div>
      </div>
    </div>
  );
};
