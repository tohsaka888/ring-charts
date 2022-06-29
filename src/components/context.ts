import { createContext } from "react";
import { CurrentArcContextProps, PopoverShowContextProps } from "./type";

export const PopoverShowContext = createContext<PopoverShowContextProps | null>(null)
export const CurrentArcContext = createContext<CurrentArcContextProps | null>(null)