import { Separator } from "./ui/separator";

interface HeadingProps {
  title: string;
  description: string;
  separator?: boolean;
}

export const Heading = ({ title, description, separator }: HeadingProps) => {
  return (
    <>
      <div className="px-8">
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      {separator && <Separator />}
    </>
  );
};
