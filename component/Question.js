// component
import Image from 'next/image'

const Question = (props) => {
    return (
        <div className="question">
            <div>
                <div className="question-type">
                <Image src="/icon-radiobox.png" srcSet="/icon-radiobox@2x.png 2x" width="20px" height="20px"/>
                </div>
                <div className="question-options">
                    <div className="question-option-edit"></div>
                    <div className="question-option-delete"></div>
                    <div className="question-option-sort"></div>
                </div>
                <h3>{ props.title }</h3>
                <p>
                    { props.desc }
                </p>
            </div>
            <div className="form">
                {props.inputs.map( input => (
                    <div className="radio">
                        <input type="radio" name="radio-1" disabled /> { input.text }
                    </div>
                ))}
            </div>
        </div>  
    );
}
 
export default Question;