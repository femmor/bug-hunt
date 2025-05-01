import { LoaderCircle } from "lucide-react";

const Spinner = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center self-center text-gray-500">
      <LoaderCircle className="animate-spin mx-auto my-2 w-20 h-20" />
    </div>
  );
};
export default Spinner;
