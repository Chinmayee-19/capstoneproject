import { useEffect, useState } from 'react';
import userService from '../services/User.service'
import { useParams, useHistory } from 'react-router-dom';
function Register(){

  const[name,setName]=useState([]);

  const [uname, setUname]= useState([]);
  const [password, setPassword]= useState('');
  const[companyname,setCompanyname]=useState([]);
  const [email, setEmail]= useState('');
  const [city, setCity]= useState('');
  const [role, setRole]= useState(''); 
  
  const history = useHistory();
  const {id} = useParams();

  const saveUser = (e) => {
      e.preventDefault();
      
      const user = {id,name,uname, password,companyname,email,city,role};
      userService.create(user)
          .then(response => {
              console.log("user added successfully", response.data);
              history.push("/");
          })
          .catch(error => {
              console.log('something went wrong', error);
          })
  }

  useEffect(() => {
      if (id) {
          userService.get(id)
              .then(user => {
                  setName(user.data.name);
                  setUname(user.data.uname);
                  setPassword(user.data.password);
                  setCompanyname(user.data.companyname)
                  setEmail(user.data.email)
                  setCity(user.data.city)
                  setRole(user.data.role)
              })
              .catch(error => {
                  console.log('Something went wrong', error);
              })
      }
  }, [])

    return(
      <center>
        <form className='container'>
        <h3><u>Register</u></h3>
        <br/>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="name"
            className="form-control col-4"
            placeholder="Enter name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          </div>
          <div className="mb-3">
          <label>UserName</label>
          <input
            type="uname"
            className="form-control col-4"
            placeholder="Enter username"
            value={uname}
            onChange={(e)=>setUname(e.target.value)}
          />
          </div>
          <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control col-4"
            placeholder="Enter password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
          <div className="mb-3">
          <label>Company Name</label>
          <input
            type="companyname"
            className="form-control col-4"
            placeholder="Enter companyname"
            value={companyname}
            onChange={(e)=>setCompanyname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control col-4"
            placeholder="Enter email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Location</label>
          <input
            type="city"
            className="form-control col-4"
            placeholder="City"
            value={city}
            onChange={(e)=>setCity(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Admin/User</label>
        <input className="form-control col-4"  type="role" list="datalistOptions" value={role}
            onChange={(e)=>setRole(e.target.value)} id="opt" placeholder="Admin/User"/>
                            <datalist id="datalistOptions">
                            <option value="Admin"/>
                            <option value="User"/>
                            </datalist>
              
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
            <p>By creating an account you agree to our <a href="#">Terms & conditions</a></p>
          </div>
          <a href ="/login" className="btn btn-primary" 
            onClick={(e)=>saveUser(e)}>
            Submit
          </a>
        </div>
        <p className="forgot-password text-right">
          <a href="/userForget">Forgot password?</a>
        </p>
        <div className="container text-right">
        <footer>
                <p><sup>&copy;</sup> Copyrights reversed to Hands Company and Co. </p>
            </footer>
        </div>
      </form>
      </center>
      
    )
}
export default Register