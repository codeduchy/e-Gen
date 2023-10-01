import { IconDescriptor } from "next/dist/lib/metadata/types/metadata-types";
import { IconType } from "react-icons";

interface HeadingProps {
  title: string;
  description: string;
  icon: IconType;
  iconColor?: string;
  bgColor?: string;
}

export const Heading = ({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}: HeadingProps) => {
  return (
    <div className={`flex items-center gap-x-3 mb-8`}>
      <Icon className={`w-10 h-10 ${iconColor} xl:h-14 xl:w-14`} />
      <div>
        <h2 className={`${iconColor} text-3xl xl:text-5xl font-bold`}>
          {title}
        </h2>
        <p className="text-md xl:text-lg text-slate-500/60">{description}</p>
      </div>
    </div>
  );
};
