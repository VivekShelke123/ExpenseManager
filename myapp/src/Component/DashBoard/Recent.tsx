import React from 'react';

interface RecentProps{
    show:string;
    title:string;
    value:number;
    type:string;
    date:string;
    time:string;
}

const Recent :React.FC<RecentProps> = (props) => {
  return (
    <div className='recent-compo'>
      <li id='Title'>Recent {props.show}</li>
      <p><li>{props.title}</li> <li>{props.value}</li></p>
      <p><li>{props.type}</li></p>
      <p><li>{props.date} and {props.time}</li></p>
    </div>
  )
}

export default Recent
