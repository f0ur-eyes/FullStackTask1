import React, { createContext, useEffect, useState} from "react";

const ListContext = createContext()

export default ListContext;

//Creating the provider for the context
export const ListProvider = ({children}) => {
    //useState for the list
    const [list, setList] = useState([]);
    //function to add an element to the list
    const addToList = (element) => {
        //Retrieves the old elements of the list and adds the new one
        setList((oldList) => [...oldList, element])
    }
    //useEffect to log the list to console when updated
    useEffect(() =>{
        console.log(list)
    }, [list])

    return (
        <ListContext.Provider value = {{list, addToList}}>
            {children}
        </ListContext.Provider>
    )
}