import { useReducer } from "react";
import { createContext } from "react";

export const QuestionsContext = createContext()

export const questionsReducer = (state, action) => {
    switch(action.type){
        case 'SET_QUESTIONS':
            return {
                questions: [action.payload]
            }
        case 'CREATE_QUESTION':
            return {
                questions: [action.payload, ...state.questions]
            }
        case 'DELETE_QUESTION':
            return {
                questions: state.questions.filter( q => q.id != action.payload )
            }
        case 'EDIT_QUESTION':
            // creating Array to return
            const newArray = [...state.questions]

            // finding index of item to be replaced
            const indexOfReplace = newArray.findIndex( q => q.id == action.payload.id ) 

            // replacing item
            newArray[indexOfReplace] = action.payload

            return {
                questions: newArray
            }
            default:
                return state
    }
}

export function QuestionsContextProvider({ children }){
   const [state, dispatch] = useReducer(questionsReducer, {
        questions: null
    })

    return (
        <QuestionsContext.Provider value={{...state, dispatch}}>{ children }</QuestionsContext.Provider>
    )
}

