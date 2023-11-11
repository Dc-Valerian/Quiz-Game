import React, { createContext,PropsWithChildren  } from "react";

interface ContextData {
    questiondata:any,
    setQuestion:  React.Dispatch<React.SetStateAction<any>>
}

export const GlobalContext = createContext<ContextData | null>(null);


export const MainContext: React.FC<PropsWithChildren> = ({children}) => {
    const [questiondata, setQuestion] = React.useState()
return (
<GlobalContext.Provider value={
    {
        questiondata,
        setQuestion
    }
}>
{children}
</GlobalContext.Provider>
)
}