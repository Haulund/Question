// components
import Question from "./Question";

// hooks
import { useState } from "react";

const QuestionList = (props) => {
    const [arrayQuestions, setArrayQuestions] = useState(props.array)

    return (
        <>
            {arrayQuestions.map(question=>(
                <Question 
                    title={question.title}
                    desc={question.desc}
                    inputs={question.inputs}
                />
                
            ))}
        </>
    );
}
 
export default QuestionList;