import axios from "axios"

const REST_API_BASE_URL = 'http://localhost:8080/api/emps';

export const listEmployees = () => {
    return axios.get(REST_API_BASE_URL);
}

export const addEmployees = (employee) => {
    return axios.post(REST_API_BASE_URL + '/create-emp', employee);
}

export const getEmployeeById = (employeeId) => {
    return axios.get(REST_API_BASE_URL + '/' + employeeId);
}

export const updateEmployeeById = (employeeId, employee) => {
    return axios.put(REST_API_BASE_URL + '/' + employeeId, employee);
}

export const deleteEmployeeById = (employeeId) => {
    return axios.delete(REST_API_BASE_URL + '/' + employeeId);
}