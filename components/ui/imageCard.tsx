"use client";
import Button from "./button";

const ImageCard = ({
  children,
  src = "",
  ...attributes
}: {
  children: React.ReactNode;
  src?: string;
}) => {
  return (
    <div
      className="w-full h-full flex flex-col rounded-lg overflow-hidden bg-white transition-all hover:shadow-xl"
      {...attributes}
    >
      <div>
        <div className="aspect-square relative w-full h-full">{children}</div>
      </div>
      <Button
        className=" bg-gradient-to-r from-pink-700/90 to-cyan-500 w-full rounded-none"
        onClick={() => window.open(src)}
      >
        Download
      </Button>
    </div>
  );
};
export default ImageCard;
