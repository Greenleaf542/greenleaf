import React from 'react'
import './Special.css'
import leaf from '../../img/leaf.webp'
function change()
{
  const changetext = document.getElementById('textbox').innerHTML='Front-End Developmen We specialize in creating user-friendly and visually appealing interfaces that bring your ideas to life. Our front-end development team ensures your website or application looks great and works seamlessly across all devices. With a focus on responsiveness and usability, we deliver digital experiences that leave a lasting impression.';
}
function change1()
{
  const changetext = document.getElementById('textbox').innerHTML='How are you';
}
function change2()
{
  const changetext = document.getElementById('textbox').innerHTML='Hello world!';
}
function change3()
{
  const changetext = document.getElementById('textbox').innerHTML='Hello world!';
}

function Special() {

  return (
    <div>
      <div className='container Main_class'>
      <h1 className='heading1'><img src={leaf} alt="" /> Our <span>Specialization</span></h1>
      <p className='pargraph'>"We've mastered the art of design, blending creativity with cutting-edge tools <br /> to deliver tailored, visually striking solutions for every project."</p>
      <div className="Right-text-button">
        <div><button  onClick={change}>Front-end Developer</button></div>
        <div><button  onClick={change1}>Back-end Developer</button></div>
        <div><button  onClick={change2}>Graphic Design</button></div>
        <div><button onClick={change3}>Digital Marketing</button></div>
      </div>
      <div className="Left-text-background">
       </div>
       <div className='Top'>
       <p id='textbox'>
        <b>FRONT-END DEVELOPMENT</b> <br /> 
        Front-End Development
        We specialize in creating user-friendly and visually appealing interfaces that bring your ideas to life. Our front-end development team ensures your website or application looks great and works seamlessly across all devices. With a focus on responsiveness and usability, we deliver digital experiences that leave a lasting impression.
       </p>
      
       </div>
     </div>
    </div>
  )
}

export default Special
