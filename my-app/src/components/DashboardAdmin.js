import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import jobService from '../services/job.service';

const DashboardAdmin = () => {

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

  const handleDelete = (id) => {
    console.log('Printing id', id);
    if(window.confirm('are you sure'))
    jobService.remove(id)
      .then(response => {
        console.log('job deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (
    <div className="container">
      <h3>List of jobs</h3>
      <hr/>
      <div>
        <Link to="/add" className="btn btn-primary mb-2">Add Job</Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Logo</th>
              <th>Company Name</th>
              <th>Desgination</th>
              <th>Yrs of Exp</th>
              <th>Job description</th>
              <th>Location</th>
              <th>Actions</th>
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
                <td>
                  <Link className="btn btn-info" to={`/job/updatejob/${job.id}`}>Update</Link>
                  <br/>
                  <br/>
                  <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(job.id);
                  }}>Delete</button>
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default DashboardAdmin
