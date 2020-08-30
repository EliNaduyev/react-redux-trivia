import React from 'react'
import './Room.css'


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
                            Timer
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quo.
                        </div>
                        <div className='ans-box center'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quo.
                        </div>                    
                    </div>
             
                    <div className='row'>
                        <div className='ans-box center'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quo.
                        </div>
                        <div className='ans-box center'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quo.
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Room
