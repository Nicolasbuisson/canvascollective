import "./button.css";

type variant = "filled" | "outlined";
type size = "big" | "medium";

interface IButtonProps {
  text: string;
  url: string;
  variant?: variant;
  size?: size;
}

export const Button = (props: IButtonProps) => {
  const { text, url, variant = "filled", size = "big" } = props;

  return (
    <a href={url} target="blank">
      <button
        className={`button ${variant === "filled" ? "filled" : "outlined"} ${
          size === "big" ? "big" : "medium"
        }`}
      >
        {text}
      </button>
    </a>
  );
};
