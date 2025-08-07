import {create} from "zustand";

interface DarkModeI{
    dark:boolean,
    changeColor: ()=>void
}

export const DarkMode= create<DarkModeI>(
    (set) => ({
    dark:true,
    changeColor: ()=> set((state) => ({
        dark:!state.dark
    }))
}))