import React from "react"
import { useReducer } from "react"

let ListContext = React.createContext({
    list : [],
    Add : (body) => {},
    Remove : (id) => {}
})

let listReducer = (listState, action) => {
    if(action.type === 'ADD') {
        return [...listState, action.body]
    }
    else if(action.type === 'REMOVE') {
        let newList = listState.filter((item) => item.id !== action.id)
        return newList
    }
    return listState
}

let ListContextProvider = (props) => {
    let [list, dispatch] = useReducer(listReducer, [])

    let addHandler = (body) => {
        dispatch({type:"ADD",body:body})
    }

    let removeHandler = (id) => {
        dispatch({type:"REMOVE",id:id})
    }

    return (
        <ListContext.Provider value={{
            list : list,
            Add : addHandler,
            Remove : removeHandler
        }}>
            {props.children}
        </ListContext.Provider>
    )
}

export {ListContext, ListContextProvider}