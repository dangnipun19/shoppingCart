import { createContext } from "react";


const data = createContext({});

const filterState =(props)=>{

    const state ="hieee"

    return(
        <filterContext.Provider value={state}>
            {props.children}
        </filterContext.Provider>
    )
}

export default filterState
export {data}