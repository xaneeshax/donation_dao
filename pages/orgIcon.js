import React from 'react'
import Image from 'next/image'


const OrgIcon = (props) => {
  const { img, name, address } = props.organization 
  console.log(img)
  
  // attribute, eventHandler


  // onClick, onMouseOver

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target)
    alert('hey')
  }


  return (
    <article className="organization">
      <img
        src={img}
        alt=""
        width={256}
        height={256}
      />
      <h2>{name}</h2>
      <h4>{address}</h4>
      {/* <button type="button" onClick={clickHandler}></button> */}
    </article>
  );
}


export default OrgIcon