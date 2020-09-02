import React, { useState, useEffect } from 'react';
import './Room.css';
import axios from 'axios';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import countDownTimer from '../countDownTimer/countDownTimer';

const Room = (props) => {
  //the set of all questions
  const [questionsSet, setQuestionsSet] = useState([]);
  //question number
  const [questionNumber, setQuestionNumber] = useState(1);
  // qurrent question
  const [currentQuestion, setCurrentQuestion] = useState({});
  // answers array
  const [possibleAnswers, setPossibleAnswers] = useState([]);
  //score
  const [score, setScore] = useState(0);
  //hearts
  const [hearts, setHearts] = useState(3);

  useEffect(() => {
    axios
      .get(
        'https://opentdb.com/api.php?amount=15&category=18&difficulty=medium&type=multiple'
      )
      .then((response) => {
        setQuestionsSet(response.data.results);
        let tmp = response.data.results[0];
        setCurrentQuestion(tmp);
        let arr = tmp.incorrect_answers;
        arr.push(tmp.correct_answer);
        shuffleArray(arr);
        setPossibleAnswers(arr);
      });
  }, []);

  const getQuetion = () => {
    const a = document.querySelector('#a');
    a.style.background = 'rgb(231, 231, 231)';
    a.style.color = 'black'
    const b = document.querySelector('#b');
    b.style.background = 'rgb(231, 231, 231)';
    b.style.color = 'black'
    const c = document.querySelector('#c');
    c.style.background = 'rgb(231, 231, 231)';
    c.style.color = 'black'
    const d = document.querySelector('#d');
    d.style.background = 'rgb(231, 231, 231)';
    d.style.color = 'black'
    setCurrentQuestion(questionsSet[questionNumber]);
    let arr = questionsSet[questionNumber].incorrect_answers;
    arr.push(questionsSet[questionNumber].correct_answer);
    shuffleArray(arr);
    setPossibleAnswers(arr);
  };

  const checkAnswer = (ans, section) => {
    const answer = document.querySelector('#' + section);

    // check if the answer is right
    if (ans === currentQuestion.correct_answer) {
      setScore(score + 5);
      playAudio('https://www.youtube.com/watch?v=0ZQ-Lk--ILE');
      answer.style.background = 'rgb(99, 190, 99)';
      answer.style.color = 'white'
    } else {
      answer.style.background = 'rgb(207, 75, 75)';
      answer.style.color = 'white'
      let tmp;
      for (let i = 0; i < possibleAnswers.length; i++) {
        if (currentQuestion.correct_answer === possibleAnswers[i]) {
          tmp = i;
          break;
        }
      }
      console.log(tmp);
      switch (tmp) {
        case 0:
          const a = document.querySelector('#a');
          a.style.background = 'rgb(99, 190, 99)';
          a.style.color = 'white'
          break;
        case 1:
          const b = document.querySelector('#b');
          b.style.background = 'rgb(99, 190, 99)';
          b.style.color = 'white'
          break;
        case 2:
          const c = document.querySelector('#c');
          c.style.background = 'rgb(99, 190, 99)';
          c.style.color = 'white'

          break;
        case 3:
          const d = document.querySelector('#d');
          d.style.background = 'rgb(99, 190, 99)';
          d.style.color = 'white'
          break;
        default:
          break;
      }
      if (hearts > 0) setHearts(hearts - 1);
      else endGame();
    }

    setTimeout(() => {
      //check if the questions ended
      if (questionNumber < 15) {
        setQuestionNumber(questionNumber + 1);
        getQuetion();
      } else endGame();
    }, 1000);
  };

  const timeEnded = () => {
    if (hearts > 0) {
      setHearts(hearts - 1);
      if (questionNumber < 15) {
        setQuestionNumber(questionNumber + 1);
        getQuetion();
      } else endGame();
    } else endGame();
  };

  const endGame = () => {
    console.log('endGame');
    props.history.push('/results')

  };

  function playAudio(url) {
    new Audio(url).play();
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  return (
    <div className='room'>
      <div className='room-container'>
        <div className='room-header'>
          <h1>Trivia Game</h1>
          <div className='question-and-timer'>
            <div className='question-counter'>
              <p>Question</p>
              <p>{questionNumber}</p>
            </div>
            <div className='timer'>
              <CountdownCircleTimer
                isPlaying
                duration={30}
                key={questionNumber}
                // colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                size={90}
                onComplete={() => timeEnded()}
                colors={[['#FFFFFF', 0.33]]}
              >
                {countDownTimer}
              </CountdownCircleTimer>
            </div>
            <div className='user-lifes center'>
              {hearts <= 2 ? (
                <i class='fas fa-heart-broken'></i>
              ) : (
                <i class='fa fa-heart' aria-hidden='true'></i>
              )}
              {hearts <= 1 ? (
                <i class='fas fa-heart-broken'></i>
              ) : (
                <i class='fa fa-heart' aria-hidden='true'></i>
              )}
              {hearts === 0 ? (
                <i class='fas fa-heart-broken'></i>
              ) : (
                <i class='fa fa-heart' aria-hidden='true'></i>
              )}
            </div>
          </div>
        </div>

        <div className='room-question center'>
          <p dangerouslySetInnerHTML={{ __html: currentQuestion.question }}></p>
        </div>

        <div className='room-ans'>
          <div className='row'>
            <div
              className='ans-box center'
              id='a'
              onClick={() => {
                checkAnswer(possibleAnswers[0], 'a');
              }}
            >
              <div className='number-of-ans'>a</div>
              <label dangerouslySetInnerHTML={{ __html: possibleAnswers[0] }}>

              </label>
            </div>
            <div
              className='ans-box center'
              id='b'
              onClick={() => {
                checkAnswer(possibleAnswers[1], 'b');
              }}
            >
              <div className='number-of-ans'>b</div>
              <label
                dangerouslySetInnerHTML={{ __html: possibleAnswers[1] }}
              ></label>
            </div>
          </div>
          <div className='row'>
            <div
              className='ans-box center'
              id='c'
              onClick={() => {
                checkAnswer(possibleAnswers[2], 'c');
              }}
            >
              <div className='number-of-ans'>c</div>
              <label
                dangerouslySetInnerHTML={{ __html: possibleAnswers[2] }}
              ></label>
            </div>
            <div
              className='ans-box center'
              id='d'
              onClick={() => {
                checkAnswer(possibleAnswers[3], 'd');
              }}
            >
              <div className='number-of-ans'>d</div>
              <label
                dangerouslySetInnerHTML={{ __html: possibleAnswers[3] }}
              ></label>
            </div>
          </div>
        </div>
        {/* <div className='exit-game-btn-div center'>
                    <button className='exit-game-btn center'>
                        <span>Exit Game</span> 
                        <i class="fa fa-sign-out" aria-hidden="true"></i>
                        </button>
                </div> */}
        <div className='exit-game-btn-div center'>
          <button className='exit-game-btn center' onClick={()=> props.history.push('/')}>
            <span>Exit Game</span>
            <i class='fa fa-sign-out' aria-hidden='true'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Room;
