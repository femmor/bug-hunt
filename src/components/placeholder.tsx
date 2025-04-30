import { Rabbit } from "lucide-react";
import { cloneElement, ReactElement, ReactNode } from "react";

type PlaceholderProps = {
  label: string;
  icon?: ReactElement;
  button?: ReactNode;
};

const Placeholder = ({
  label,
  icon = <Rabbit />,
  button = <div />,
}: PlaceholderProps) => {
  return (
    <div className="flex flex-1 self-center flex-col items-center justify-center my-20">
      {cloneElement(icon as ReactElement<{ className?: string }>, {
        className: "text-gray-600 w-24 h-24",
      })}
      <h2 className="text-lg text-center text-gray-600">{label}</h2>
      {cloneElement(button as ReactElement<{ className?: string }>, {
        className: "h-10",
      })}
    </div>
  );
};
export default Placeholder;
