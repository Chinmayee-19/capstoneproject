

function Login(){

    return(
      <center>
        <form className='container'>
        <h3><u>Login</u></h3>
        <br/>
        <div className="mb-3">
          <label>Role</label>
          <input className="form-control col-4" list="datalistOptions"  id="opt" placeholder="Admin/User"/>
                            <datalist id="datalistOptions">
                            <option value="Admin"/>
                            <option value="User"/>
                            </datalist>
        </div>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="username"
            className="form-control col-4"
            placeholder="Enter username"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control col-4"
            placeholder="Enter password"
          />
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
        </div>
        <div className="d-grid">
         <a href="/dashboard"  className="btn btn-primary">
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
export default Login