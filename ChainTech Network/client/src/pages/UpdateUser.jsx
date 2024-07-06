import axios from "axios"
import { useContext, useState } from "react"
import { UserContext } from "../context/userContext"
import {toast} from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export default function UpdateUser() {
    const [data, setData] = useState("")
    const { user } = useContext(UserContext)
    const navigate = useNavigate();

    const handleChange = async(e)=>{
        e.preventDefault()
        console.log(data)
        try {
            const update  = await axios.put('/update', data)
            console.log(data)
            //Handle error and notifying 
            if (update.error) {
              toast.error(update.error);
            } else {
              setData({})
            }
            navigate('/account')
          }
          catch (err) {
            console.log(err)
          }

    }
    return (
        <div className="container d-flex justify-content-center my-5 w-50">
            <div className="col-lg-8">
                <div className="card">
                    <form className="card-body" action="" onSubmit={handleChange}>
                        <h1 className="mb-4">Update Profile</h1>
                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Full Name</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <input type="text" className="form-control" value={user && (user.name || "")} onChange={(e) => setData({ ...data, name: e.target.value })} required/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Email</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <input type="text" className="form-control" value={user.email} onChange={(e) => setData({ ...data, email: e.target.value })} required/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Gender</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <input type="text" className="form-control" placeholder="Male/Female" onChange={(e) => setData({ ...data, gender: e.target.value })} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Age</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <input type="text" className="form-control" placeholder="20" onChange={(e) => setData({ ...data, age: e.target.value })}/>
                            </div>
                        </div>
                        <div className="row mb-3">
								<div className="col-sm-3">
									<h6 className="mb-0">Education</h6>
								</div>
								<div className="col-sm-9 text-secondary">
									<input type="text" className="form-control" placeholder="10th/12th/UG/PG" onChange={(e) => setData({ ...data, education: e.target.value })}/>
								</div>
							</div>

                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Address</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <input type="text" className="form-control" placeholder="Bay Area, San Francisco, CA" onChange={(e) => setData({ ...data, address: e.target.value })}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <h6 className="mb-0">City</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <input type="text" className="form-control" placeholder="San Francisco" onChange={(e) => setData({ ...data, city: e.target.value })}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <h6 className="mb-0">State</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <input type="text" className="form-control" placeholder="California" onChange={(e) => setData({ ...data, state: e.target.value })}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-9 text-secondary">
                                <button type="submit" className="btn btn-primary px-4">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
