import React from 'react'
import './Results.css'
import Table from './Table/Table'
import { Link } from 'react-router-dom'
const Results = () => {
    return (
        <div className='results'>

            <div className='results-container'>
                <div className='results-header'>
                    <i class="fa fa-trophy" aria-hidden="true"></i>
                    <h1>Results</h1>
                </div>

                <div className='user-results'>
                    {/* <h1>Your Results:</h1> */}
                    <div className='user-results-center'>
                        <div className='user-results-container'>
                            <p>Correct Questions</p>
                            <h2 style={{color: "rgb(3, 238, 23)"}}>8</h2> 
                        </div>
                        <div className='user-results-container'>
                            <p>Your Score</p>
                            <h2>645</h2> 
                        </div>
                        <div className='user-results-container'>
                            <p>Wrong Questions</p>
                            <h2 style={{color: "red"}}>7</h2> 
                        </div>
                    </div>
                
                </div>

                <div className='top-10-results-grid'>
                    <div className='results-box'>
                        <h1>
                            <span>Top 10 HighTech Trivia Players</span>
                            <div className='results-box-underline'></div> 
                        </h1>

                        <Table/>
                    </div>
                    <div className='results-box'>
                        <h1>
                            <span>Top 10 Random Trivia Players</span> 
                            <div className='results-box-underline'></div> 

                        </h1>
                        <Table/>
                    </div>

                </div>

                <div className='exit-game-btn-div'>
                    <Link to='/'>
                        <button className='exit-game-btn'>Main Page</button>
                    </Link>
                </div>
               
            </div>
            
        </div>
    )
}

export default Results
