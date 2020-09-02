import React from 'react'
import './Table.css'
import goldMedal from '../../../assets/gold-medal.png'
import silverMedal from '../../../assets/silver-medal.png'
import bronzeMedal from '../../../assets/bronze-medal.png'

const Table = () => {
    return (
        <table className='results-table'>

            <thead>
                <th className='td-number'>No.</th>
                <th>Name</th>
                <th>Points</th>
            </thead>

            <tbody className='table-body'>
                <tr>
                    <td>
                        <div className='td-img-flex'>
                            <span>1.</span> 
                            <img src={goldMedal} alt=""/> 
                        </div>
                    </td>                                 
                    <td>Eli</td>
                    <td>4353</td>
                </tr>
                <tr>
                    <td>
                        <div className='td-img-flex'>
                            <span>2.</span> 
                            <img src={silverMedal} alt=""/>
                        </div>
                    </td> 
                    <td>Maria</td>
                    <td>786</td>
                </tr>
                <tr>
                    <td>
                        <div className='td-img-flex'>
                            <span>3.</span> 
                            <img src={bronzeMedal} alt=""/>
                        </div>
                    </td>
                    <td>Jon</td>
                    <td>343</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Halisi</td>
                    <td>500</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>milye</td>
                    <td>600</td>
                </tr>
            </tbody>

        </table>
    )
}

export default Table
