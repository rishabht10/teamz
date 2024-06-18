import React from 'react'
import { data } from '../assets/data'
import Card from './Card';
import './Mainstyle.css'

const Main = () => {

    console.log(data);

  return (<div className='cards '>
{data.map((ele)=>{

 return <Card img={ele.img} name={ele.name} sem={ele.sem} lang={ele.lang} tech={ele.techstack} /> 

})}
</div>
  )
}

export default Main