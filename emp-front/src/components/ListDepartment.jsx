import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteDepartmentById, listDepartments } from "../services/DepartmentService";

const ListDepartment = () => {
    const [departments, setDepartments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllDepartments();
    }, []);

    function getAllDepartments() {
        listDepartments()
            .then((response) => {
                setDepartments(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    function updateDepartment(id) {
        navigate(`/update-department/${id}`);
    }

    function deleteDepartment(id) {
        console.log(id);
        if (id) {
            deleteDepartmentById(id).then((response) => {
                console.log(response.data);
                getAllDepartments();
            }).catch((error) => {
                console.error(error);
            })
        }
    }

    return (
        <div className="container">
            <h2 className="mb-4 text-center" style={{ paddingTop: "20px" }}>
                List of Departments
            </h2>
            <Link to='/add-department' className="btn btn-primary" style={{ marginBottom: "10px" }}>Add Department</Link>
            <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Department ID</th>
                            <th scope="col">Department Name</th>
                            <th scope="col">Department Description</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {departments.map((dept) => (
                            <tr key={dept.id}>
                                <td>{dept.id}</td>
                                <td>{dept.departmentName}</td>
                                <td>{dept.departmentDescription}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateDepartment(dept.id)}>Update</button>
                                    <button className='btn btn-danger' style={{ marginLeft: "15px" }} onClick={() => deleteDepartment(dept.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListDepartment;
