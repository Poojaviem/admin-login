import React from 'react'
import { Link } from 'react-router-dom'

function UserInfo() {
  return (
    <>
    <div className='user'><h3>BOOK APOIMENT BY USER</h3>
    <Link className='link'to="/user"><h4>Book apoiment</h4></Link>
    <Link className='link' to="/login"><h4>Logout</h4></Link>
    </div>
    <div className='class-name'>

      <h2>Check All Apoiment </h2>
    <table className='table'>
  <tr>
    <th>SR no .</th>
    <th>Name</th>
    <th>Email</th>
    <th>Address</th>
    <th>Age</th>
    <th>Aadhar no.</th>
    <th>Message</th>
    <th colspan="2">mobile no</th>    
  </tr>
  <tr>
    <td>01</td>
    <td>John Doe</td>
    <td>john.doe@example.com</td>    
    <td>rajwada</td>
    <td>23</td>
    <td>212212121212</td>
    <td>cold</td>
    <td>1234567890</td>    
  </tr>
  <tr>
  <td>02</td>

    <td>John Doe</td>
    <td>john.doe@example.com</td>    
    <td>rajwada</td>
    <td>23</td>
    <td>212212121212</td>
    <td>cold</td>
    <td>1234567890</td>  
  </tr>
  <tr>
  <td>03</td>

    <td>John Doe</td>
    <td>john.doe@example.com</td>    
    <td>rajwada</td>
    <td>23</td>
    <td>212212121212</td>
    <td>cold</td>
    <td>1234567890</td>
  </tr>
  <tr>
  <td>04</td>

    <td>John Doe</td>
    <td>john.doe@example.com</td>    
    <td>rajwada</td>
    <td>23</td>
    <td>212212121212</td>
    <td>cold</td>
    <td>1234567890</td> 
  </tr>
</table>
    </div>
    
    </>

  )
}

export default UserInfo