import {Component} from "react"

import {Menu,Bell,Speech,CircleUser,ChevronLeft,ChevronRight,Flag} from "lucide-react"


import NavigationLink from "../NavigationLink"
import QuestionNumber from "../QuestionNumber";
import QuestionDisplay from "../QuestionDisplay";
import PieChartConfig  from "../PieChartConfig"

import "./index.css"

const questions  = [
    {
        id: 'q1',
        question: 'Which planet is known as the Red Planet?',
        options: [
            { id: 'o1', option: 'Earth' },
            { id: 'o2', option: 'Mars' },
            { id: 'o3', option: 'Venus' },
            { id: 'o4', option: 'Jupiter' },
        ],
    },
    {
        id: 'q2',
        question: 'What is the capital city of Australia?',
        options: [
            { id: 'o1', option: 'Sydney' },
            { id: 'o2', option: 'Melbourne' },
            { id: 'o3', option: 'Canberra' },
            { id: 'o4', option: 'Brisbane' },
        ],
    },
    {
        id: 'q3',
        question: 'Which is the largest ocean on Earth?',
        options: [
            { id: 'o1', option: 'Atlantic Ocean' },
            { id: 'o2', option: 'Indian Ocean' },
            { id: 'o3', option: 'Arctic Ocean' },
            { id: 'o4', option: 'Pacific Ocean' },
        ],
    },
    {
        id: 'q4',
        question: 'What is the square root of 144?',
        options: [
            { id: 'o1', option: '10' },
            { id: 'o2', option: '12' },
            { id: 'o3', option: '14' },
            { id: 'o4', option: '16' },
        ],
    },
    {
        id: 'q5',
        question: 'Which country hosted the 2016 Summer Olympics?',
        options: [
            { id: 'o1', option: 'China' },
            { id: 'o2', option: 'Brazil' },
            { id: 'o3', option: 'United Kingdom' },
            { id: 'o4', option: 'Russia' },
        ],
    },
    {
        id: 'q6',
        question: 'What is the hardest natural substance on Earth?',
        options: [
            { id: 'o1', option: 'Gold' },
            { id: 'o2', option: 'Iron' },
            { id: 'o3', option: 'Diamond' },
            { id: 'o4', option: 'Platinum' },
        ],
    },
    {
        id: 'q7',
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: [
            { id: 'o1', option: 'Charles Dickens' },
            { id: 'o2', option: 'William Shakespeare' },
            { id: 'o3', option: 'Leo Tolstoy' },
            { id: 'o4', option: 'Mark Twain' },
        ],
    },
    {
        id: 'q8',
        question: 'What is the chemical symbol for water?',
        options: [
            { id: 'o1', option: 'H2O' },
            { id: 'o2', option: 'CO2' },
            { id: 'o3', option: 'O2' },
            { id: 'o4', option: 'HO' },
        ],
    },
    {
        id: 'q9',
        question: "Which animal is known as the 'King of the Jungle'?",
        options: [
            { id: 'o1', option: 'Elephant' },
            { id: 'o2', option: 'Tiger' },
            { id: 'o3', option: 'Lion' },
            { id: 'o4', option: 'Cheetah' },
        ],
    },
    {
        id: 'q10',
        question: 'In which year did the Titanic sink?',
        options: [
            { id: 'o1', option: '1910' },
            { id: 'o2', option: '1912' },
            { id: 'o3', option: '1914' },
            { id: 'o4', option: '1920' },
        ],
    },
    {
        id: 'q11',
        question: 'What is the smallest prime number?',
        options: [
            { id: 'o1', option: '1' },
            { id: 'o2', option: '2' },
            { id: 'o3', option: '3' },
            { id: 'o4', option: '5' },
        ],
    },
    {
        id: 'q12',
        question: 'Which planet is the closest to the Sun?',
        options: [
            { id: 'o1', option: 'Venus' },
            { id: 'o2', option: 'Mercury' },
            { id: 'o3', option: 'Earth' },
            { id: 'o4', option: 'Mars' },
        ],
    },
    {
        id: 'q13',
        question: 'In what year did World War II end?',
        options: [
            { id: 'o1', option: '1943' },
            { id: 'o2', option: '1945' },
            { id: 'o3', option: '1947' },
            { id: 'o4', option: '1950' },
        ],
    },
    {
        id: 'q14',
        question: 'What is the capital of Japan?',
        options: [
            { id: 'o1', option: 'Beijing' },
            { id: 'o2', option: 'Seoul' },
            { id: 'o3', option: 'Tokyo' },
            { id: 'o4', option: 'Kyoto' },
        ],
    },
    {
        id: 'q15',
        question: "Which element has the chemical symbol 'O'?",
        options: [
            { id: 'o1', option: 'Oxygen' },
            { id: 'o2', option: 'Osmium' },
            { id: 'o3', option: 'Ozone' },
            { id: 'o4', option: 'Oxide' },
        ],
    },
    {
        id: 'q16',
        question: 'How many sides does a hexagon have?',
        options: [
            { id: 'o1', option: '4' },
            { id: 'o2', option: '5' },
            { id: 'o3', option: '6' },
            { id: 'o4', option: '8' },
        ],
    },
    {
        id: 'q17',
        question: 'Which is the longest river in the world?',
        options: [
            { id: 'o1', option: 'Amazon' },
            { id: 'o2', option: 'Nile' },
            { id: 'o3', option: 'Yangtze' },
            { id: 'o4', option: 'Mississippi' },
        ],
    },
    {
        id: 'q18',
        question: 'What is the hardest known mineral?',
        options: [
            { id: 'o1', option: 'Quartz' },
            { id: 'o2', option: 'Diamond' },
            { id: 'o3', option: 'Corundum' },
            { id: 'o4', option: 'Topaz' },
        ],
    },
    {
        id: 'q19',
        question: "Who is known as the 'Father of Computers'?",
        options: [
            { id: 'o1', option: 'Alan Turing' },
            { id: 'o2', option: 'Charles Babbage' },
            { id: 'o3', option: 'John von Neumann' },
            { id: 'o4', option: 'Thomas Edison' },
        ],
    },
    {
        id: 'q20',
        question: 'Which organ in the human body is primarily responsible for detoxification?',
        options: [
            { id: 'o1', option: 'Liver' },
            { id: 'o2', option: 'Kidney' },
            { id: 'o3', option: 'Lungs' },
            { id: 'o4', option: 'Heart' },
        ],
    },
    {
        id: 'q21',
        question: 'What is the currency of Japan?',
        options: [
            { id: 'o1', option: 'Yuan' },
            { id: 'o2', option: 'Dollar' },
            { id: 'o3', option: 'Yen' },
            { id: 'o4', option: 'Won' },
        ],
    },
    {
        id: 'q22',
        question: 'How many continents are there in the world?',
        options: [
            { id: 'o1', option: '5' },
            { id: 'o2', option: '6' },
            { id: 'o3', option: '7' },
            { id: 'o4', option: '8' },
        ],
    },
    {
        id: 'q23',
        question: 'Who invented the light bulb?',
        options: [
            { id: 'o1', option: 'Alexander Graham Bell' },
            { id: 'o2', option: 'Thomas Edison' },
            { id: 'o3', option: 'Nikola Tesla' },
            { id: 'o4', option: 'Benjamin Franklin' },
        ],
    },
    {
        id: 'q24',
        question: 'Which is the largest country by land area?',
        options: [
            { id: 'o1', option: 'Canada' },
            { id: 'o2', option: 'China' },
            { id: 'o3', option: 'Russia' },
            { id: 'o4', option: 'United States' },
        ],
    },
    {
        id: 'q25',
        question: 'Which gas do plants absorb from the atmosphere?',
        options: [
            { id: 'o1', option: 'Oxygen' },
            { id: 'o2', option: 'Carbon Dioxide' },
            { id: 'o3', option: 'Nitrogen' },
            { id: 'o4', option: 'Hydrogen' },
        ],
    },
    {
        id: 'q26',
        question: 'In which direction does the sun rise?',
        options: [
            { id: 'o1', option: 'North' },
            { id: 'o2', option: 'South' },
            { id: 'o3', option: 'East' },
            { id: 'o4', option: 'West' },
        ],
    },
    {
        id: 'q27',
        question: 'Which planet in our solar system has the most moons?',
        options: [
            { id: 'o1', option: 'Earth' },
            { id: 'o2', option: 'Saturn' },
            { id: 'o3', option: 'Jupiter' },
            { id: 'o4', option: 'Mars' },
        ],
    },
    {
        id: 'q28',
        question: 'What is the largest mammal in the world?',
        options: [
            { id: 'o1', option: 'Elephant' },
            { id: 'o2', option: 'Blue Whale' },
            { id: 'o3', option: 'Great White Shark' },
            { id: 'o4', option: 'Giraffe' },
        ],
    },
    {
        id: 'q29',
        question: 'What is the main ingredient in guacamole?',
        options: [
            { id: 'o1', option: 'Avocado' },
            { id: 'o2', option: 'Tomato' },
            { id: 'o3', option: 'Lettuce' },
            { id: 'o4', option: 'Onion' },
        ],
    },
    {
        id: 'q30',
        question: 'Which country is famous for the Eiffel Tower?',
        options: [
            { id: 'o1', option: 'Germany' },
            { id: 'o2', option: 'Italy' },
            { id: 'o3', option: 'France' },
            { id: 'o4', option: 'Spain' },
        ],
    },
];


class Home extends Component {
    state = {questionNumber :1, 
        remainingTime : 3600, 
        selectedAnswers:{},
        showResultStatus:false
    }

    componentDidMount (){
        this.startTimer()
    }

    componentWillUnmount () {
        clearInterval(this.timerId)
    }

    startTimer = async()=> {
      
        this.timerId =  setInterval(()=> {
            this.setState((prevState)=> {
                if (prevState.remainingTime <=0) {
                    clearInterval(this.timerId)
                    this.setState({showResultStatus:true})
                    return {remainingTime:0} 
                }

                else {
                    return {remainingTime:prevState.remainingTime-1} 
                    
                }
            })

        },1000)
        
    }

    formatTime = (seconds)=> {
        const hours = Math.floor(seconds/3600)
        const minutes = Math.floor((seconds%3600)/60); 
        const sec = seconds % 60; 
        return `${String(hours).padStart(2,"0")}: ${String(minutes).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;
    }


    onActiveQuestion = (num)=> {
        this.setState({questionNumber:num})
    }

    onclickprevious = ()=> {
        this.setState((prevState)=> ({questionNumber:prevState.questionNumber-1}))
    }

    onclicknext = ()=> {
        this.setState((prevState)=> ({questionNumber:prevState.questionNumber+1}))
    }

    onOptionSelect = (questionId,optionId)=> {
        this.setState((prevState)=> ({
                selectedAnswers:{ 
                    ...prevState.selectedAnswers,[questionId]: optionId
                }
        })
    )
    }

    getAnsweredCounts = ()=> {
        const {selectedAnswers} = this.state
        return Object.keys(selectedAnswers).length
    }

    clickResultsPage = ()=> {
        this.setState({showResultStatus:true})
    }

    getUnattempted = ()=> {
        return questions.length - this.getAnsweredCounts()
    }

    render(){
        const {questionNumber,remainingTime, selectedAnswers,showResultStatus} = this.state 
        console.log(selectedAnswers)
        const activeQuestion = questions.find((eachQuestion)=> eachQuestion.id === `q${questionNumber}`)
        const answeredCounts = this.getAnsweredCounts()
        const isSubmitEnable = answeredCounts >=1
        const unattemptedQuesitions = this.getUnattempted()
        console.log(isSubmitEnable)
      
     
        return (
            <div className="main-background">
                <div className="side-bar"> 
                    <h2 className="logo-adjust"> <img src = "https://res.cloudinary.com/dookgusbq/image/upload/v1737876752/Vector_3_ov8hv7.png" className="logo-image"  alt ="logo"/> ETL Global <Menu className="menu"/></h2>
                    <p className="general">General</p>
                    <NavigationLink/>


                </div>
                <div className="right-side-main">
                    <div className="top-main-menu">
                        <div className="heading-container">
                            <h3>Heading </h3>
                        </div>
                        <div className="top-options">                     
                           <p><Bell size = {20} /></p>
                            <p><Speech size = {20}/></p>
                            <p><CircleUser size = {20}/></p>
                        </div>

                    </div>
                    <div className="exam-lorem-options">
                        <li className="exam-active">Exam</li>
                        <li>Lorem</li>
                        <li>Lorem</li>
                        <li>Lorem</li>

                    </div>
                  
                   {/*  Displaying required page  page based on condigtion*/}
                    {showResultStatus ? ( 
                       
                        <div className="questions-dashboard-main-container "> 
                        <div className="piechart">
                        <h3>Check Your Result</h3>
                        <p>Number of questions attempted : <span style={{color:"green"}}> { answeredCounts}</span></p>
                        <p>Number of questions left unattempted  : <span style = {{color:"red"}}>{unattemptedQuesitions} </span></p>
                        <PieChartConfig attemptedQuestions = {answeredCounts} unattempted = {unattemptedQuesitions}/>
                        </div>
                        </div>
                        ) : 
                        (

                        <div className="questions-dashboard-main-container">
                            
                            {/* Making option to select question   */}

                            <div className="question-number-pallet">
                                <h3>Overview</h3>
                                <br/>
                                <hr className="horizontal-line" />

                                <ul className="questions-numbers-arrange"> 
                                    {questions.map((eachQuestion,index)=> (
                                    <QuestionNumber key = {eachQuestion.id} details = {eachQuestion} 
                                                            
                                                            
                                        onClick  = {()=>this.onActiveQuestion(index+1)} 
                                        isActive = {questionNumber=== index+1} 
                                        isAnswered = {selectedAnswers[eachQuestion.id]} />
                                                        ))}

                                </ul>


                            </div>

                            {/*question space reauirement */ }
                        <div className="question-description-pallet">
                            <div className="quesion-time-number-display">
                                <p>MCQ- <span className="question-number">Q{questionNumber}</span></p>
                                <p>{this.formatTime(remainingTime)}</p>
                            </div>

                            { /* displayin question by passing props to QuestionDisplay Component   */}
                            <QuestionDisplay activeQuestion = {activeQuestion} onOptionSelect={this.onOptionSelect}
                            selectedAnswer = {selectedAnswers[activeQuestion.id]}
                            />

                            <hr className="horizontal-line"/>
                            
                            <div className="botton-container">
                                <button  className="buton-end" disabled = {!isSubmitEnable} onClick = {this.clickResultsPage}>End And Submit</button>
                                <div className="right-side-butons-container">
                                    <button onClick={this.onclickprevious} className="buttons"><ChevronLeft size = {16}/>Previous</button>
                                    <button  className="buttons">Flag <Flag size = {15}/></button>
                                    <button onClick={this.onclicknext}  className="buttons">Next <ChevronRight size = {16}/></button>
                                </div>
                                                {/* using below code for small screen  */}
                                <div className="right-side-butons-container-small-screen">
                                    <button onClick={this.onclickprevious} className="buttons"><ChevronLeft size = {12}/></button>
                                    <button  className="buttons">Flag <Flag size = {12}/></button>
                                    <button onClick={this.onclicknext}  className="buttons"><ChevronRight size = {12}/></button>
                                </div>

                            </div>

                        </div>

                        </div>
                    )}
                    

                </div>
            </div>
        )
    }
}



export default Home