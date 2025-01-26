import "./index.css"

const QuestionNumber = (props)=> {
    const {details,onClick,isActive,isAnswered} = props 
    const {id} = details

   

    return (
        <li className={`list-question-number ${isActive? "active" : ""} ${isAnswered? "answered": ""} `} onClick={onClick}>
                {id.slice(1)}
        </li>
    )
}



export default QuestionNumber