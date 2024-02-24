import React, { useEffect, useState } from "react";
import { addEmployees, getEmployeeById, updateEmployeeById } from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            getEmployeeById(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch((err) => {
                console.error(err);
            });
        }
    }, [id])

    // Function to handle form submission
    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const employee = { firstName, lastName, email };

            if (id) {
                updateEmployeeById(id, employee).then((response) => {
                    console.log(response.data);
                    navigate("/employees");
                }).catch((err) => {
                    console.error(err);
                });
            }
            else {
                addEmployees(employee)
                    .then((response) => {
                        console.log(response.data);
                        setFirstName("");
                        setLastName("");
                        setEmail("");
                        navigate("/employees");
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        }
    };

    function validateForm() {
        let valid = true;

        const errorsCopy = { ...errors };

        if (firstName.trim()) {
            errorsCopy.firstName = "";
        } else {
            errorsCopy.firstName = "First name is required";
            valid = false;
        }

        if (lastName.trim()) {
            errorsCopy.lastName = "";
        } else {
            errorsCopy.lastName = "Last name is required";
            valid = false;
        }

        if (email.trim()) {
            errorsCopy.email = "";
        } else {
            errorsCopy.email = "Email is required";
            valid = false;
        }

        setErrors(errorsCopy);
        return valid;
    }

    function pageTitle() {
        if (id) {
            return (
                <h2
                    className="add-employee-heading"
                    style={{
                        fontFamily: "Roboto, sans-serif",
                        color: "#333",
                        fontWeight: "bold",
                    }}
                >
                    UPDATE EMPLOYEE
                </h2>
            );
        }
        else {
            return (
                <h2
                    className="add-employee-heading"
                    style={{
                        fontFamily: "Roboto, sans-serif",
                        color: "#333",
                        fontWeight: "bold",
                    }}
                >
                    ADD EMPLOYEE
                </h2>
            );
        }
    }

    return (
        <div className="add-employee-form">
            {pageTitle()}
            <form onSubmit={saveOrUpdateEmployee}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        placeholder="Enter your first name"
                        className={`${errors.firstName ? "is-invalid" : ""}`}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    {errors.firstName && (
                        <div className="invalid-feedback">{errors.firstName}</div>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        placeholder="Enter your last name"
                        className={`${errors.lastName ? "is-invalid" : ""}`}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    {errors.lastName && (
                        <div className="invalid-feedback">{errors.lastName}</div>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        placeholder="Enter your email"
                        className={`${errors.email ? "is-invalid" : ""}`}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                    )}
                </div>
                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default EmployeeComponent;
