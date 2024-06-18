import React from 'react'
import './Card.css'



const Card = (props) => {
    
    let func=()=>{alert("Will be updated soon")}
    
  return (
    <div>
        <div className="card custm " style={{width: '18rem'}}>
  <img src={props.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">Semester : {props.sem}</p>
    <p className="card-text">Languages : {props.lang.join(', ')}</p>
     <p className="card-text"> TechStack : {props.tech}</p>
    <a href="#" onClick={func} className="btn btn-danger">Github</a>
  </div>
</div>
</div>

  )
}


export default Card;
