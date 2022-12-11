import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {

    const [data, updatedData] = useState([]);
    const navigate = useNavigate()
    const params = useParams();
    const id = params.id

    useEffect(() => {
        fetch(`http://localhost:5000/fetchUser/${id}`)
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                console.log(resp)
                updatedData(resp)
            })
    }, [])

    const [name, updatedName] = useState();
    const [email, updatedEmail] = useState();
    const [mobile, updatedMobile] = useState();
    const [password, updatedPassword] = useState();

    async function getFormData() {
        let call = await fetch(`http://localhost:5000/update/${id}`, {
            method: "post",
            body: JSON.stringify({ name, email, mobile, password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        call = await call.json()
        if (call) {
            navigate("/")
        }
    }

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <strong>Update User Details</strong>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="form-group col-lg-6 mb-3">
                            <label>Enter User Name</label>
                            <input type="text" className="form-control" placeholder="Enter User Name" onChange={(e) => { updatedName(e.target.value) }} defaultValue={data.name} />
                        </div>
                        <div className="form-group col-lg-6 mb-3">
                            <label>Enter User Email</label>
                            <input type="email" className="form-control" placeholder="Enter User Email" onChange={(e) => { updatedEmail(e.target.value) }} defaultValue={data.email} />
                        </div>
                        <div className="form-group col-lg-6 mb-3">
                            <label>Enter User Mobile</label>
                            <input type="text" className="form-control" placeholder="Enter User Mobile" onChange={(e) => { updatedMobile(e.target.value) }} defaultValue={data.mobile} />
                        </div>
                        <div className="form-group col-lg-6 mb-3">
                            <label>Enter User Password</label>
                            <input type="password" className="form-control" placeholder="Enter User Password" onChange={(e) => { updatedPassword(e.target.value) }} defaultValue={data.password} />
                        </div>
                        <div className="form-group col-lg-12 text-center">
                            <button className="btn btn-dark" onClick={() => { getFormData() }}>Update Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditUser;