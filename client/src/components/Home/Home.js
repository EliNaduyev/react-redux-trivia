import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import highTech from '../../assets/hightect.jpg'

const Home = () => {
    return (
        <div className='home'>
            <Navbar/>
            <div className='home-container'>

              <div className='home-left'>
                  <img src={highTech} alt="img"/>
                  <h1>High Tech Trivia</h1>
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing 
                      elit. Consectetur id natus ipsam architecto voluptates 
                      adipisci cum eius accusamus quidem, repellat vitae possimus
                       hic quibusdam nam vel voluptas veritatis obcaecati ex.
                  </p>
                  <div>
                      {/* <label></label> */}
                    <input className='home-inputs' type="text" placeholder='Enter your nickname'/>

                  </div>
                  <button className='home-btn'>Start Game</button>

              </div>

              <div className='home-right'>

              </div>

            </div>

            
        </div>
    )
}

export default Home
