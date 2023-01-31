import { useContext } from "react";
import { Context } from "../Context/AuthContext";


export const useAuth=()=>useContext(Context)