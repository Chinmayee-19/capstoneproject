import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import jobService from '../services/job.service';

const Joblist = () => {

  const [jobs, setJobs] = useState([]);

  const init = () => {
    jobService.getAll()
      .then(response => {
        console.log('Printing employees data', response.data);
        setJobs(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }

  useEffect(() => {
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
        <Link to="/add" className="btn btn-primary mb-2">Add Employee</Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Profile</th>
              <th>Name</th>
              <th>Department</th>
              <th>Location</th>
              <th>Date of Joining</th>
              <th>Income</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            employees.map(employee => (
              <tr key={employee.id}>
                <td align="center"><img src={employee.propic} width="50" height="45" alt="Profile Picture"/></td>
                <td>{employee.name}</td>
                <td>{employee.department}</td>
                <td>{employee.location}</td>
                <td>{employee.doj}</td>
                <td>{employee.income}</td>
                <td>
                  <Link className="btn btn-info" to={`/employees/edit/${employee.id}`}>Update</Link>
                  
                  <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(employee.id);
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

export default Joblist;
