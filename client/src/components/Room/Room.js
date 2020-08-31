import React from 'react'
import './Room.css'
// import roomBG from '../../assets/room_bg.jpg'
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import countDownTimer from '../countDownTimer/countDownTimer'

const Room = () => {
    return (
        <div className='room'>

            <div className='room-container'>

                <div className='room-header'>
                    <h1>Trivia Game</h1>
                    <div className='question-and-timer'>
                        <div className='question-counter'>
                            <p>Question</p>
                            <p>1</p>
                        </div>
                        <div className='timer'>
                            <CountdownCircleTimer
                                isPlaying
                                duration={30}
                                // colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                                size={90}
                                // onComplete={() => [true, 1000]}
                                colors={[["#FFFFFF", 0.33]]}
                                >
                                {countDownTimer}
                            </CountdownCircleTimer>
                        </div>
                        <div className='user-lifes center'>
                            <i class="fa fa-heart" aria-hidden="true"></i>
                            <i class="fa fa-heart" aria-hidden="true"></i>
                            <i class="fa fa-heart" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>

                <div className='room-question center'>

                    <p >
                        Lorem ipsum dolor, sit amet consectetur 
                        adipisicing elit. Sunt, quasi recusandae! 
                        Dolor modi culpa nobis amet aliquid vitae 
                        rerum facilis at nesciunt, ut consequatur 
                        dolore quo incidunt obcaecati labore ipsam.
                    </p>

                </div>

                <div className='room-ans'>
                    <div className='row'>
                        <div className='ans-box center'>
                            <div className='number-of-ans'>a</div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quo.
                        </div>
                        <div className='ans-box center'>
                            <div className='number-of-ans'>b</div>

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quo.
                        </div>                    
                    </div>
             
                    <div className='row'>
                        <div className='ans-box center'>
                            <div className='number-of-ans'>c</div>

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quo.
                        </div>
                        <div className='ans-box center'>
                            <div className='number-of-ans'>d</div>

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quo.
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
                    <button className='exit-game-btn center'>
                        <span>Exit Game</span> 
                        <i class="fa fa-sign-out" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
         
        </div>
    )
}

export default Room
