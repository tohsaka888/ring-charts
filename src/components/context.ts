import { createContext } from "react";
import { CurrentArcContextProps, DataSourceContextProps, DeletedContextProps, PopoverShowContextProps } from "./type";

export const PopoverShowContext = createContext<PopoverShowContextProps | null>(null)
export const CurrentArcContext = createContext<CurrentArcContextProps | null>(null)
export const DeletedContext = createContext<DeletedContextProps | null>(null)
export const DataContext = createContext<DataSourceContextProps | null>(null)