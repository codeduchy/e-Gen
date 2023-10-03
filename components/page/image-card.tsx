import Image from "next/image";
import Button from "@/components/button";

const ImageCard = ({
  children,
  src,
}: {
  children: React.ReactNode;
  src: string;
}) => {
  return (
    <div className="rounded-lg overflow-hidden transition-all  hover:scale-[1.01] hover:shadow-md">
      <div className="relative aspect-square">{children}</div>
      <Button
        hover={false}
        rounded={false}
        color="bg-gradient-to-r from-pink-700 to-cyan-500 text-white"
        onClick={() => window.open(src)}
      >
        Download
      </Button>
    </div>
  );
};
export default ImageCard;
