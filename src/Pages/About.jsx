import React, {useState} from 'react'
import "../Components/Slider.css"

export default function About() {
    const [stateIndex, setStateIndex] = useState(0);

    const states = [
        {name: 'All Tasks', className: 'alltasks'},
        {name: 'Completed Tasks', className: 'completed'},
        {name: 'Uncompleted Tasks', className: 'uncompleted'}
    ]

    const handleClick = () => {
        setStateIndex((prevStateIndex) => (prevStateIndex + 1) % states.length)
    };

    const currentState = states[stateIndex]

  return (
    <button 
        onClick={handleClick}
        className={`three-position-button ${currentState.className}`}>
        {currentState.name}
    </button>
  )
}
