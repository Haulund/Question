import Image from 'next/image'

const Question = () => {
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
                <h3>Spørgsmål 1</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel nisl eu massa mollis finibus. Aenean pulvinar lacus ut purus laoreet egestas.
                </p>
            </div>
            <div className="form">
                <div className="radio">
                    <input type="radio" name="radio-1" disabled /> Hest
                </div>
                <div className="radio">
                    <input type="radio" name="radio-1" disabled /> Hest
                </div>
                <div className="radio">
                    <input type="radio" name="radio-1" disabled /> Hest
                </div>
                <div className="radio">
                    <input type="radio" name="radio-1" disabled /> Hest
                </div>
            </div>
        </div>  
    );
}
 
export default Question;