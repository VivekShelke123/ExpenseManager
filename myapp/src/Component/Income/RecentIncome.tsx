import React from 'react'

const RecentIncome :React.FC= () => {
  return (
    <div>
      <div className='title-class'>
        <li style={{'fontSize':'2.2vw','marginBottom':'0%'}}>Recent Income</li>
        <li style={{'fontSize':'0.99vw','marginTop':'0%'}}>Here are Your Recent Income</li>
        <div className='amt-class'>
            <li>Current Month Amt :</li>
            <li>Last Month Amt :</li>
            <li>Total Amt :</li>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default RecentIncome;
