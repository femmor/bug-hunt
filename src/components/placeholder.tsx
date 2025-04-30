import { Rabbit } from "lucide-react";
import { cloneElement, ReactElement } from "react";

type PlaceholderProps = {
  label: string;
  icon?: ReactElement;
};

const Placeholder = ({ label, icon = <Rabbit /> }: PlaceholderProps) => {
  return (
    <div className="flex flex-1 self-center flex-col items-center justify-center my-20">
      {cloneElement(icon as ReactElement<{ className?: string }>, {
        className: "text-gray-600 w-24 h-24",
      })}
      <h2 className="text-lg text-center text-gray-600">{label}</h2>
    </div>
  );
};
export default Placeholder;
