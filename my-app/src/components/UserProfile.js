import { useEffect, useState } from 'react';
import userService from '../services/User.service'
import { useParams, useHistory } from 'react-router-dom';
import UserService from '../services/User.service';
import userEvent from '@testing-library/user-event';

function UserProfile(){
    const [user, setUser] = useState([]);
    const {id} = useParams();
  
  const init = () => {
    UserService.getAll()
      .then(response => {
        console.log('Printing job data', response.data);
        setUser(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }

  useEffect(()=> {
    init();
  }, []);
    return(
      
        <div className="container">
          <center>
          <h3>Welcome to User Profile Page</h3>
        <div className="card">{
        user.map(user=>(
          <div className="card-layout">
          <h6 className="card-title" ><b>Name : </b>{user.name}</h6>
          <h6 className="card-title" ><b>UserName : </b>{user.uname}</h6>
          <h6 className="card-title" ><b>CompanyName : </b>{user.companyname}</h6>
          <h6 className="card-title" ><b>Email : </b>{user.email}</h6>
          <h6 className="card-title" ><b>City : </b>{user.city}</h6>
          <h6 className="card-title" ><b>Role : </b>{user.role}</h6> 
          <hr/>
          </div>
          ))}
        </div>
        </center>
      </div>
     
    )
}
export default UserProfile