import { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import Typewriter, { TypewriterClass } from 'typewriter-effect';

export type Title =
  "Hello World"
  | "About"
  | "Contact"
  | "This Project";

export default function Title(): JSX.Element {
  const title = useTitle();
  const [writer, setWriter] = useState<TypewriterClass>();

  const animate = (typewriter: any) => {
    typewriter
      .typeString(title)
      .start();
    setWriter(typewriter);
  };

  useEffect(() => {
    if (writer) {
      writer
        .deleteAll(15)
        .typeString(title)
        .start()
      setWriter(writer);
    }
  }, [title]);

  return (
    <h1 className="mx-[60px] text-4xl flex">
      <p>//</p>
      <Typewriter
        onInit={animate}
        options={{ cursor: ".", delay: 35 }}
      />
    </h1>
  );
};