import nextConfig from "../../next.config";

interface ImageProps {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
}

export const ImageBasePath = (props: ImageProps) => {
  const { src, width, height, alt = "alt", className } = props;
  return (
    <img
      src={nextConfig.basePath + src}
      className={className}
      width={width}
      height={height}
      alt={alt}
    />
  );
};
