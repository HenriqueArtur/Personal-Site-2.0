import useTitle from "../../hooks/useTitle";

export type Title =
  "Hello World"
  | "About"
  | "Contact"
  | "This Project";

export default function Title(): JSX.Element {
  const title = useTitle();

  return (
    <h1 className="mx-[60px] text-2xl">
      // {title}
    </h1>
  );
};