import { GlobalContextType } from "../Utils/Types";
import { createContext } from "react";

export const globalContext = createContext<GlobalContextType>({
  isScrolling: false,
});
