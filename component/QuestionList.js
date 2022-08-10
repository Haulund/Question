// components
import Question from "./Question";

// hooks
import { useQuestionsContext } from '../context/questions'

const QuestionList = (props) => {
    const [arrayQuestions, setArrayQuestions] = useQuestionsContext()
    console.log(arrayQuestions)

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