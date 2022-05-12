import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import jobService from "../services/job.service";

const AddJob = () => {
    const[logo, setLogo] = useState('');
    const[companyname, setCompanyname] = useState('');
    const[designation, setDesignation] = useState('');
    const[yrsofexp, setYrsofexp] = useState('');
    const[jobdesc, setJobdesc] = useState('');
    const[location,setLocation]=useState('');
    const history = useHistory();
    const {id} = useParams();

    const saveJob = (e) => {
        e.preventDefault();
        
        const job = {logo,companyname,designation,yrsofexp,jobdesc,location,id};
        if (id) {
            //update
            jobService.update(job)
                .then(response => {
                    console.log('job data updated successfully', response.data);
                    history.push('/');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                }) 
        } else {
            //create
            jobService.create(job)
            .then(response => {
                console.log("job added successfully", response.data);
                history.push("/");
            })
            .catch(error => {
                console.log('something went wroing', error);
            })
        }
    }

    useEffect(() => {
        if (id) {
            jobService.get(id)
                .then(job => {
                    setLogo(job.data.logo);
                    setCompanyname(job.data.companyname);
                    setDesignation(job.data.designation);
                    setYrsofexp(job.data.yrsofexp);
                    setJobdesc(job.data.jobdesc);
                    setLocation(job.data.location);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    return(
        <div className="container">
            <h3>Add Job</h3>
            <hr/>
            <form>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="Logo"
                        value={logo}
                        onChange={(e) => setLogo(e.target.value)}
                        placeholder="Enter Company logo"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="companyname"
                        value={companyname}
                        onChange={(e) => setCompanyname(e.target.value)}
                        placeholder="Enter Company name"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="designation"
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        placeholder="Enter Desgination"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="number" 
                        className="form-control col-4"
                        id="yrsofexp"
                        value={yrsofexp}
                        onChange={(e) => setYrsofexp(e.target.value)}
                        placeholder="Enter yrs of experience required"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="jobdesc"
                        value={jobdesc}
                        onChange={(e) => setJobdesc(e.target.value)}
                        placeholder="Enter job description"
                    />
                </div>
                <div className='form-group'>
                <input className="form-control col-4" list="datalistOptions" onChange={(e) => setLocation(e.target.value)} value={location} id="location" placeholder="Location"/>
                            <datalist id="datalistOptions">
                            <option value="San Francisco"/>
                            <option value="New York"/>
                            <option value="Seattle"/>
                            <option value="Los Angeles"/>
                            <option value="Chicago"/>
                            </datalist>
                </div>
                <div>
                    <button onClick={(e) => saveJob(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            <hr/>
            <Link to="/dashboard">Back to List</Link>
        </div>
    )
}

export default AddJob;