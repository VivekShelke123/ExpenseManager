import React from 'react';

interface MEprops{
  title:string;
  value:number;
}

const MonthExpense :React.FC<MEprops> = (props) => {
  return (
    <div className='compo-class'>
      <div>
        <li>{props.title}</li>
      </div>
      <div>
        <li>{props.value}</li>
      </div>
    </div>
  )
}

export default MonthExpense
