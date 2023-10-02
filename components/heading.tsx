import { IconType } from "react-icons";

type HeadingProps = {
  title: string;
  description: string;
  icon: IconType;
  color: string;
};

const Heading = ({ title, description, icon: Icon, color }: HeadingProps) => {
  return (
    <div className="flex p-2 gap-x-2 mb-8 items-center">
      <Icon className={`${color} w-10 h-10 xl:w-12 xl:h-12`} />
      <div>
        <h2 className={`${color} text-3xl xl:text-4xl font-bold`}>{title}</h2>
        <p className="text-slate-500 text-sm">{description}</p>
      </div>
    </div>
  );
};
export default Heading;
