import React, { useState } from "react";
import { addEmployees } from "../services/EmployeeService";
import { useNavigate } from 'react-router-dom';

const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const employee = { firstName, lastName, email }

        addEmployees(employee).then((response) => {
            console.log(response.data);
            navigate("/employees");
        }).catch((error) => {
            console.error(error);
        })
    };

    return (
        <div className="add-employee-form">
            <h2
                className="add-employee-heading"
                style={{ fontFamily: "Roboto, sans-serif", color: "#333", fontWeight: "bold" }}
            >
                ADD EMPLOYEE
            </h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        placeholder="Enter your first name"
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        placeholder="Enter your last name"
                        required
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        placeholder="Enter your email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default EmployeeComponent;
