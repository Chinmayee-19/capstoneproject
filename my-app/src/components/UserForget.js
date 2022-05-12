import { Link, useNavigate, useParams } from "react-router-dom";

function UserForget() {
    return (
      
        <div>
        <br></br>
            <div className="container">
        <h5>Reset Password</h5>
        <br></br>
        <form>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="uname"
                        placeholder="Enter Username"
                    />

                    <br/>
                    <input 
                        type="email" 
                        className="form-control col-4"
                        id="uname"
                        placeholder="Enter your email Id"
                    />
                </div>
            <br></br>

                <div >
                    <a href="/login" className="btn btn-primary">Login Now</a>
                </div>
                <br/>
                <br/>
                <br/>
                <Link to="login/"> Go Back to Home and login</Link>
                
            </form>
            <h5> </h5>
    </div>
 </div>
  );
}

export default UserForget