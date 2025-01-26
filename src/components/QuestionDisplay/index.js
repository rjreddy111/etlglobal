import { Component } from "react"

import "./index.css"

class QuestionDisplay extends Component {
    

    
    handleOptionChange = (event)=> {
        const {activeQuestion,onOptionSelect} = this.props
        onOptionSelect(activeQuestion.id, event.target.value)

    }
    
    render() {
        const {activeQuestion,selectedAnswer} = this.props 
      
        const question = activeQuestion.question 

        
        console.log(activeQuestion)
        return (
            <div className="display-question">
            <h1 className="question-heading">{question}</h1>
            <hr/>
            <br/>
            {activeQuestion.options.map((eachOption)=> (
                <label key = {eachOption.id} className="label-option">
                    <input type = "radio"  
                    name = {`question-${activeQuestion.id}`} 
                    onChange={this.handleOptionChange}
                    value = {eachOption.id}
                    checked = {selectedAnswer===eachOption.id}
                    

                    
                    />
               
                <li className="list-options-style">{eachOption.option}</li>
                </label>
            ))}
            
          
          
            </div>


        )
    }

}






export default QuestionDisplay

