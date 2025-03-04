import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const Main=() =>{
  return (
    <>
      <h2 className='text-danger'>About Me:</h2>
      <p>Bhagat Singh was an Indian anti-colonial revolutionary, who participated in the mistaken murder of a junior British police officer in December 1928 in what was to be retaliation for the death of an Indian nationalist.</p>
      <h2>Education:</h2>
      <ol className='bg-info'>
        <li>10th-68%</li>
        <li>12th-43%</li>
        <li>Btech-6.5cgpa</li>
      </ol>
      <h2 className='text-danger'>Skils</h2>
      <ul>
        <li>Java</li>
        <li>React</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>DSA</li>

      </ul>
    </>
  )
}

export default Main