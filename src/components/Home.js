import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {

    const [data, updatedData] = useState([])

    useEffect(() => {
        fetchAllUsers()
    }, [])

    function fetchAllUsers() {
        fetch("http://localhost:5000/fetclAllUsers")
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                updatedData(resp)
            })
    }

    async function deleteuser(e) {
        const url = `http://localhost:5000/delete/${e}`;
        let response = await fetch(url, {
            method: "delete"
        })
        response = await response.json()
        if (response) {
            fetchAllUsers()
        }
    }

    return (
        <>
            <Table className="table table-bordered table-striped table-hover text-center">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length > 0 ?
                            data.map((item, i) =>
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.mobile}</td>
                                    <td>
                                        <Link to={"/editUser/" + item._id} className="btn btn-success" style={{ marginRight: "15px" }}>Edit</Link>
                                        <Button onClick={() => { deleteuser(item._id) }} className="btn btn-danger">Delete</Button>
                                    </td>
                                </tr>
                            )
                            :
                            <tr className="text-center">
                                <td colSpan={5}>NO RECORD FOUND</td>
                            </tr>
                    }
                </tbody>
            </Table>
        </>
    )
}

export default Home;