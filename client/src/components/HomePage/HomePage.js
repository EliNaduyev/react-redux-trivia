import React, { useState } from 'react'
import './HomePage.css'
import Navbar from '../Navbar/Navbar'
import highTechImg from '../../assets/hightect.jpg'
import triviaImg from '../../assets/trivia.jpg'
import { Link } from 'react-router-dom'
import { startGame } from '../../actions/index'

import { useSelector, useDispatch } from 'react-redux'

const HomePage = () => {

    const[name, setName] = useState('')
    const dispatch = useDispatch()


    // const startGame = () => {

    //     console.log(name)
    // }

    return (
        <div className='home-page'>
            <Navbar/>
            <div className='home-page-center'>
                <div className='home-page-container'>

                    <div className='home-page-header'>
                            <h1>Trivia World</h1>
                            <div className='home-page-input-div'>
                                <i className="fa fa-user input-icon" aria-hidden="true"></i>
                                <input
                                className='home-page-inputs'
                                type="text"
                                placeholder='Enter your nickname'
                                onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                    </div>

                    <div className='home-page-grid'>

                        <div className='box'>
                            <img src={highTechImg} alt="img"/>
                            <div className='box-container'>
                                <h1 className='box-header'>High Tech Trivia</h1>
                                <p className='box-trivia-description'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing 
                                    elit. Consectetur id natus ipsam architecto voluptates 
                                    adipisci cum eius accusamus quidem, repellat vitae possimus
                                    hic quibusdam nam vel voluptas veritatis obcaecati ex.
                                </p>
                    
                                <div className='btn-div'>
                                    <button className='home-btn'
                                    onClick={()=>dispatch(startGame(name))}>
                                        <span>Start Game</span> 
                                        <i className="fa fa-play" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='box'>
                            <img src={triviaImg} alt="img"/>
                            <div className='box-container'>
                                <h1 className='box-header'>Random Trivia</h1>
                                <p className='box-trivia-description'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing 
                                    elit. Consectetur id natus ipsam architecto voluptates 
                                    adipisci cum eius accusamus quidem, repellat vitae possimus
                                    hic quibusdam nam vel voluptas veritatis obcaecati ex.
                                </p>
                                <div className='btn-div'>
                                    <button className='home-btn' onClick={startGame}>
                                        <span>Start Game</span> 
                                        <i className="fa fa-play" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    )
}

export default HomePage
