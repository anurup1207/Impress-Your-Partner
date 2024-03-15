import React, {useEffect , useState} from 'react'
import './Main.css'

function Main2(props) {
    const [buttonPosition, setButtonPosition] = useState({ left: '50%', top: '50%' });

    useEffect(() => {
      const button = document.getElementById('btn');
  
      const handleMouseOver = () => {
        setButtonPosition({
          left: `${Math.ceil(Math.random() * 90)}%`,
          top: `${Math.ceil(Math.random() * 90)}%`
        });
      };
  
      button.addEventListener('mouseover', handleMouseOver);
      button.addEventListener('click', handleMouseOver);
  
      return () => {
        button.removeEventListener('mouseover', handleMouseOver);
        button.removeEventListener('click' , handleMouseOver);
      };
    }, []);
  return (
    
    <div className='main'>
        <img src={props.image} height="246" width="320" alt="one" />
    
    <h1 >{props.headingText}</h1>
    <p>{props.smallText}</p>
    <div className="buttons">
        <button className='yes' onClick={props.ClickYes}>YES</button>
        <button id='btn' style={
            {   position: "absolute",
                transition: '0.5s',
                left: buttonPosition.left, 
                top: buttonPosition.top 
            }
        }  
         >NO</button>
    </div>
    </div>
    
  )
}

export default Main2
