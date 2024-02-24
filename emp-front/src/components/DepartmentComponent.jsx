import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    addDepartment,
    getDepartmentById,
    updateDepartmentById,
} from "../services/DepartmentService";

const DepartmentComponent = () => {
    const [departmentName, setDepartmentName] = useState("");
    const [departmentDescription, setDepartmentDescription] = useState("");

    const [errors, setErrors] = useState({
        departmentName: "",
        departmentDescription: "",
    });

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            getDepartmentById(id)
                .then((response) => {
                    setDepartmentName(response.data.departmentName);
                    setDepartmentDescription(response.data.departmentDescription);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }, [id]);

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const department = { departmentName, departmentDescription };

            if (id) {
                updateDepartmentById(id, department)
                    .then((response) => {
                        console.log(response.data);
                        navigate("/departments");
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            } else {
                addDepartment(department)
                    .then((response) => {
                        console.log(response.data);
                        setDepartmentName("");
                        setDepartmentDescription("");
                        navigate("/departments");
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            }
        }
    }

    function validateForm() {
        let valid = true;

        const errorsCopy = { ...errors };

        if (departmentName.trim()) {
            errorsCopy.departmentName = "";
        } else {
            errorsCopy.departmentName = "Department name is required";
            valid = false;
        }

        if (departmentDescription.trim()) {
            errorsCopy.departmentDescription = "";
        } else {
            errorsCopy.departmentDescription = "Department description is required";
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
                    UPDATE DEPARTMENT
                </h2>
            );
        } else {
            return (
                <h2
                    className="add-employee-heading"
                    style={{
                        fontFamily: "Roboto, sans-serif",
                        color: "#333",
                        fontWeight: "bold",
                    }}
                >
                    ADD DEPARTMENT
                </h2>
            );
        }
    }

    return (
        <div className="add-employee-form">
            {pageTitle()}
            <form onSubmit={saveOrUpdateEmployee}>
                <div className="form-group">
                    <label htmlFor="departmentName">Department Name:</label>
                    <input
                        type="text"
                        id="departmentName"
                        value={departmentName}
                        placeholder="Enter department name"
                        className={`${errors.departmentName ? "is-invalid" : ""}`}
                        onChange={(e) => setDepartmentName(e.target.value)}
                    />
                    {errors.departmentName && (
                        <div className="invalid-feedback">{errors.departmentName}</div>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="departmentDescription">Department Description:</label>
                    <input
                        type="text"
                        id="departmentDescription"
                        value={departmentDescription}
                        placeholder="Enter department description"
                        className={`${errors.departmentDescription ? "is-invalid" : ""}`}
                        onChange={(e) => setDepartmentDescription(e.target.value)}
                    />
                    {errors.departmentDescription && (
                        <div className="invalid-feedback">
                            {errors.departmentDescription}
                        </div>
                    )}
                </div>
                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default DepartmentComponent;
