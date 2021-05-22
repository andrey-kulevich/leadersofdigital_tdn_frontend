import {createContext} from "react";
import UserMob from "./UserMob";

export const UserContext = createContext<UserMob>({} as UserMob)
export const UserProvider = UserContext.Provider
