import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import jobService from '../services/job.service';

const Dashboard = () => {

  const [job, setJobs] = useState([]);
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

  useEffect(()=> {
    init();
  }, []);

  return (
    <div className="container">
      <h3>Welcome to Dashboard</h3>
          <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link" href="/adminpage">Admin</a>
                </li>
                <li class="nav-item">
                      <a class="nav-link" href="/userpage">User</a>
                </li>
                <li class="nav-item">
                      <a class="nav-link" href='/Userprofile'>User Profile</a>
                </li>
          </ul>
      <hr/>
      <div>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Logo</th>
              <th>Company Name</th>
              <th>Desgination</th>
              <th>Yrs of Exp</th>
              <th>Job description</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
          {
            job.map(job => (
              <tr key={job.id}>
                <td align="center"><img src={job.logo} width="50" height="45" alt="Company logo"/></td>
                <td>{job.companyname}</td>
                <td>{job.designation}</td>
                <td>{job.yrsofexp}</td>
                <td>{job.jobdesc}</td>
                <td>{job.location}</td>
              </tr>
            ))
          }
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default Dashboard
