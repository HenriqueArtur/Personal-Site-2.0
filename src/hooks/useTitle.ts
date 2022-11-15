import { useContext } from "react";
import { PageContext } from "../contexts/PageContext";
import { Title } from "../components/Title";

export default function useSession(): Title {
  const { title } = useContext(PageContext);

  return title;
};