// components
import Question from "./Question";

// hooks
import { useQuestionsContext } from '../hooks/useQuestionsContext'
import { useEffect } from "react";

const QuestionList = () => {
    const input = {id: 1, title: "spørgsmål 1", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel nisl eu massa mollis finibus. Aenean pulvinar lacus ut purus laoreet egestas.", inputs: [{text: "hest"},{text: "hest"},{text: "hest"},{text: "hest"}]}
        
    const { questions, dispatch } = useQuestionsContext()
    
    useEffect(() => {
        console.log('LIST: ', questions)

    
        dispatch({type:'SET_QUESTIONS', payload: input})
    },[dispatch])
    
    
    
    return (
        <>
            {questions && questions.map(question=>(
                <Question 
                    key={question.id.toString()}
                    id={question.id.toString()}
                    title={question.title}
                    desc={question.desc}
                    inputs={question.inputs}
                />
                
            ))}
        </>
    );
}
 
export default QuestionList;