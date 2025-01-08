import "./button.css";

type variant = "filled" | "outlined";

interface IButtonProps {
  text: string;
  url: string;
  variant?: variant;
}

export const Button = (props: IButtonProps) => {
  const { text, url, variant = "filled" } = props;

  return (
    <a href={url} target="blank">
      <button
        className={`button ${variant === "filled" ? "filled" : "outlined"}`}
      >
        {text}
      </button>
    </a>
  );
};
