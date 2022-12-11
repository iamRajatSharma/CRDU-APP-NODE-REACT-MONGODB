import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddUser() {

    const navigate = useNavigate()

    const [name, updatedName] = useState()
    const [email, updatedEmail] = useState()
    const [mobile, updatedMobile] = useState()
    const [password, updatedPassword] = useState()

    async function saveUser() {
        let resp = await fetch("http://localhost:5000/save", {
            method: "POST",
            body: JSON.stringify({ name, email, mobile, password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        resp = await resp.json()
        if (resp) {
            navigate("/")
        }
    }

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <strong>Add New User</strong>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="form-group col-lg-6 mb-3">
                            <label>Enter User Name</label>
                            <input type="text" className="form-control" onChange={(e) => { updatedName(e.target.value) }} placeholder="Enter User Name" />
                        </div>
                        <div className="form-group col-lg-6 mb-3">
                            <label>Enter User Email</label>
                            <input type="text" className="form-control" onChange={(e) => { updatedEmail(e.target.value) }} placeholder="Enter User Email" />
                        </div>
                        <div className="form-group col-lg-6 mb-3">
                            <label>Enter User Mobile</label>
                            <input type="text" className="form-control" onChange={(e) => { updatedMobile(e.target.value) }} placeholder="Enter User Mobile" />
                        </div>
                        <div className="form-group col-lg-6 mb-3">
                            <label>Enter User Password</label>
                            <input type="text" className="form-control" onChange={(e) => { updatedPassword(e.target.value) }} placeholder="Enter User Password" />
                        </div>
                        <div className="form-group col-lg-12 text-center">
                            <button onClick={() => { saveUser() }} className="btn btn-dark">Save User</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddUser;