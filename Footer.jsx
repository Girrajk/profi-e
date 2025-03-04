import React from 'react'
import "../Component/Style.css"

const Footer=()=> {
  return (
    <>
      <h2 className='t-heading'>My Fav Food:</h2>
      <table id='fav-food'>
        <tr>
          <th className='t-h'>Veg</th>
          <th className='t-h'>Non-Veg </th>
          <th className='t-h'>Desserts</th>
        </tr>
        <tr>
          <td className='t-d'>Pulav</td>
          <td className='t-d'>Biryani</td>
          <td className='t-d'>Rassogulla</td>
        </tr>
        <tr>
          <td className='t-d'>Pulav</td>
          <td className='t-d'>Biryani</td>
          <td className='t-d'>Rassogulla</td>
        </tr>
        <tr>
          <td className='t-d'>Pulav</td>
          <td className='t-d'>Biryani</td>
          <td className='t-d'>Rassogulla</td>
        </tr>
        
      </table>
    </>
  )
}

export default Footer