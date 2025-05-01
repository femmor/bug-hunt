import { LoaderCircle } from "lucide-react";

const Loading = () => {
  return (
    <div className="text-lg text-center py-4 text-gray-500">
      <LoaderCircle className="animate-spin mx-auto my-2 w-20 h-20" />
    </div>
  );
};
export default Loading;
