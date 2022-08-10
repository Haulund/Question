import { useContext, useState } from "react";
import { createContext } from "react";

const context = createContext()

export function QuestionsProvider({children}){
    const [questions, setQuestions] = useState([
		{title: "spørgsmål 1", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel nisl eu massa mollis finibus. Aenean pulvinar lacus ut purus laoreet egestas.", inputs: [{text: "hest"}, {text: "hest"}]},
		{title: "spørgsmål 2", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel nisl eu massa mollis finibus. Aenean pulvinar lacus ut purus laoreet egestas.", inputs: [{text: "hest"}, {text: "hest"}, {text: "hest"}]},
		{title: "spørgsmål 3", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel nisl eu massa mollis finibus. Aenean pulvinar lacus ut purus laoreet egestas.", inputs: [{text: "ko"}, {text: "ko"}, {text: "ko"}]}
	])
    
    return (
        <context.Provider value={[questions, setQuestions]}>{children}</context.Provider>
    )
}

export function useQuestionsContext() {
    return useContext(context)
}