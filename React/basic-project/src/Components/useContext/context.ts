import { createContext } from "react";
import type { User } from "./ContextDemo";

export const DashboardContext = createContext<User | undefined>(undefined);