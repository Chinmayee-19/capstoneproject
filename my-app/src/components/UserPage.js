import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import jobService from '../services/job.service';
import UserService from '../services/User.service';

const UserPage = () => {
  const[appliedjob,setAppliedJobs]=useState([]);
  const [job, setJobs] = useState([]);
  const [search,setSearch]=useState([]);
  const [search1,setSearch1]=useState([]);


  const init = () => {
    jobService.getAll()
      .then(response => {
        console.log('Printing job data', response.data);
        setJobs(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }
  const applyJob = (id) => {
    console.log('Printing id', id);
    if(window.confirm('are you sure you want to apply'))
    UserService.create(job)
      .then(response => {
        console.log('job applied successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }


  useEffect(()=> {
    init();
  }, []);


  return (
    <div className="container">
      <h3>List of jobs</h3>
      <div>
     
            <form >
                <input width="150px" type="text" placeholder="Search by Companyname " value={search} onChange={(e)=>
                    setSearch(e.target.value)}/><br/><br/>   
            </form> 
               <div className='container'>
                   <div className='row'>
                   {job.filter((item)=>
                       item.companyname.toLowerCase().includes(search)).map((job)=>(
                           <div className='col-md-6'>
                               <div className='card'>
                               <div className='card-body'>
                               <img src={job.logo} width="55" height="55" align="center" alt="Company logo"/> <br/>
                <h6 className="card-title" ><b>CompanyName : </b>{job.companyname}</h6>
                <h6 className="card-title"><b>Designation : </b>{job.designation}</h6>
                <h6 className="card-title"><b>Years of Experience : </b>{job.yrsofexp}</h6>
                <h6 className="card-title"><b>Job Description : </b>{job.jobdesc}</h6>
                <h6 className="card-title"><b>Location :</b>{job.location}</h6>
                <h6 className="card-title">
                  <a href="/finalPage" className="btn btn-success" onClick={()=>{
                      applyJob(job.id);
                  }}> Apply </a>
                </h6>         
</div>
                            <br/>
                       </div>
                       <br/>
                       </div>)
                       )}
                   </div>
               </div> 
               <div className='spinner-border text-primary'>
               </div>  
        </div>
        </div>
  );
}

export default UserPage

