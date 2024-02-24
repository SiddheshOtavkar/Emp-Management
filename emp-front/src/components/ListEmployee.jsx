import React, { useEffect, useState } from 'react'
import { listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';
import { deleteEmployeeById } from './../services/EmployeeService';

const ListEmployee = () => {

    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, []);

    function getAllEmployees() {
        listEmployees().then((response) => {
            setEmployees(response.data)
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewEmployee() {
        navigate("/add-employee");
    }

    function updateEmployee(id) {
        navigate(`/update-employee/${id}`);
    }

    function deleteEmployee(id) {
        console.log(id);
        if (id) {
            deleteEmployeeById(id).then((response) => {
                console.log(response.data);
                getAllEmployees();
            }).catch((error) => {
                console.error(error);
            })
        }
    }

    return (
        <div className='container'>
            <h2 className='mb-4 text-center' style={{ paddingTop: '20px' }}>List of Employees</h2>
            <div style={{ marginBottom: '10px' }}>
                <button className="button" onClick={addNewEmployee}>Add Employee</button>
            </div>
            <div className='table-responsive'>
                <table className='table table-bordered table-striped table-hover'>
                    <thead className='thead-dark'>
                        <tr>
                            <th scope='col'>Employee Id</th>
                            <th scope='col'>First Name</th>
                            <th scope='col'>Last Name</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(emp =>
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.firstName}</td>
                                <td>{emp.lastName}</td>
                                <td>{emp.email}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateEmployee(emp.id)}>Update</button>
                                    <button className='btn btn-danger' style={{ marginLeft: "15px" }} onClick={() => deleteEmployee(emp.id)}>Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default ListEmployee