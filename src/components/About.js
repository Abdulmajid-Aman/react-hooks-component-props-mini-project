import React from 'react'

const About = ({about, image = "https://via.placeholder.com/215"}) => {
  console.log(about, image);
  return (
  
      <aside>
        <img src={image} alt="blog logo" />
        <p>{about}</p>
      </aside>
  
  )
}

export default About