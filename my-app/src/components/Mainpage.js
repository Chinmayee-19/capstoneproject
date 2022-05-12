import '../Main.css'
function Mainpage(){
    return (
        <div className="container-fluid">
            <br/>
            <br/>
            <br/>
            <center>
            <p><h1>    Welcome to JobSpace</h1></p>
            <br/>
                <br/>
           
                <a href="/login" button type="button" className="btn btn-success">Login</a>
                <br/>
                <br/>
                <a href="/register" button type="button" className="btn btn-success">Register</a>
           
            <br/>
            <br/>
            <div>
            <footer>
                <p><h5>Copyrights reversed to Hands Company and Co. <sup>&copy;</sup> </h5></p>
            </footer>
            </div>
            </center>
        </div>
    )
}
export default Mainpage;