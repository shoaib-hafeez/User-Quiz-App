import React from 'react';
import { useState } from 'react';
import { QUIZ_DATA } from './constants';

const QuizApp = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [userAnswers , setUserAnswers]= useState([])

    //drived state
    const selectedQuizQuestion = QUIZ_DATA[currentQuestion];

    console.log('user',userAnswers)

    const handleNextQuestion = () => {
        setUserAnswers([...userAnswers, {
            question: QUIZ_DATA[currentQuestion].question,
            selected: QUIZ_DATA[currentQuestion].options.find((option)=>option.key === selectedOption).answer
        }]);
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption("");

    };

    const handleSelectOption = (key) => {
        setSelectedOption(key);

    };

    return (
        <div className="quiz_container">
        <h1>Quiz App</h1>

        {currentQuestion < QUIZ_DATA.length ? (
            <div className='quiz_card'>
                <h3>{selectedQuizQuestion.question}</h3>

                {selectedQuizQuestion.options.map((option) => (
                    <button
                        key={option.key}
                        onClick={() => handleSelectOption(option.key)}
                        // className={`answers ${selectedOption === option.key ? "selected" : ""}`}
                        className={'answers'}
                        style={selectedOption === option.key ? {backgroundColor: 'rgb(7, 72, 74)'}: {backgroundColor: 'cadetblue'}}
                    >
                        {option.key}. {option.answer}
                    </button>
                ))}

                <button
                    onClick={handleNextQuestion}
                    className="next_btn"
                    disabled={!selectedOption}
                    style={!selectedOption ? {backgroundColor: 'grey'} : {backgroundColor: 'blue'}}
                >
                    Next Question 
                </button>
            </div>
        ) : (
            <div className='completed'>
            {/* <h2>Quiz Completed</h2> */}
            <h3>Your Answers:</h3>
            <ol>
                {userAnswers.map((answer, index) => (
                    <li key={index}>
                        <strong>Question:</strong> {answer.question} <br /> <br />
                        <strong>Your Answer:</strong> {answer.selected}
                    </li> 
                ))}
            </ol>
        </div>
        )}
    </div>
    )
}

export default QuizApp