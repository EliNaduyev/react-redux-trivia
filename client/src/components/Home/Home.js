import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import highTechImg from '../../assets/hightect.jpg'
import triviaImg from '../../assets/trivia.jpg'

const Home = () => {
    return (
        <div className='outer-container'>
            <div className='home'>
                <Navbar/>
                <div className='home-center'>
                    <div className='home-container'>
                        <div className='home-header'>
                            <h1>Trivia World</h1>
                            <div className='home-input-div'>
                                <i className="fa fa-user input-icon" aria-hidden="true"></i>
                                <input className='home-inputs' type="text" placeholder='Enter your nickname'/>
                            
                            </div>
                        </div>
                        <div className='home-flex-container'>
                            
                            <div className='home-left'>
                                <img src={highTechImg} alt="img"/>
                                <div className='home-inner-container'>
                                    <h1 className='home-trivia-type-header'>High Tech Trivia</h1>
                                    <p className='home-trivia-description'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing 
                                        elit. Consectetur id natus ipsam architecto voluptates 
                                        adipisci cum eius accusamus quidem, repellat vitae possimus
                                        hic quibusdam nam vel voluptas veritatis obcaecati ex.
                                    </p>
                        
                                    <div className='btn-div'>
                                        <button className='home-btn'>
                                            <span>Start Game</span> 
                                            <i className="fa fa-play" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>


                            </div>

                            <div className='home-right'>
                                <img src={triviaImg} alt="img"/>
                                <div className='home-inner-container'>
                                    <h1 className='home-trivia-type-header'>Random Trivia</h1>
                                    <p className='home-trivia-description'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing 
                                        elit. Consectetur id natus ipsam architecto voluptates 
                                        adipisci cum eius accusamus quidem, repellat vitae possimus
                                        hic quibusdam nam vel voluptas veritatis obcaecati ex.
                                    </p>
                                    <div className='btn-div'>
                                        <button className='home-btn'>
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
        </div>

    )
}

export default Home
