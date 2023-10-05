type ProgressProps = {
  width: number | string;
  color?: string;
  value: string | number;
  bgColor?: string;
  className?: string;
};

const Progress = ({
  width,
  color,
  value,
  bgColor,
  className,
}: ProgressProps) => {
  return (
    <div className={className}>
      <div className={`${bgColor ? bgColor : "bg-white"} rounded-xl h-full`}>
        <div
          className={`h-full ${width} ${
            color ? color : "bg-blue-500 "
          } rounded-xl flex items-center justify-center font-semibold text-xs text-black`}
        >
          {/* {value ? value : ""} */}
        </div>
      </div>
    </div>
  );
};
export default Progress;

// <div>
//   <Progress
//     value="1"
//     width={"w-[20%]"}
//     textSize="text-xs"
//     height={"h-5"}
//     max={""}
//     color="bg-emerald-500 text-white"
//     className="mt-1"
//   />
// </div>;
