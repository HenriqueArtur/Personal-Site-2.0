import { createContext, useState } from "react";
import { Title } from "../components/Title";

interface PageContextProps {
  title: Title;
  updateTitle: (s: Title) => void;
}

interface PageContextProviderProps {
  children: React.ReactNode | React.ReactNode[];
};

export const PageContext = createContext({} as PageContextProps);

export function PageContextProvider(props: PageContextProviderProps): JSX.Element {
  const [title, setTitle] = useState("Hello World" as Title);

  function updateTitle(newTitle: Title): void {
    setTitle(newTitle);
  };

  const funcs: PageContextProps = {
    title,
    updateTitle,
  };

  return (
    <PageContext.Provider value={funcs}>
      {props.children}
    </PageContext.Provider>
  );
};