import axios from "axios"

const REST_API_BASE_URL = 'http://localhost:8080/api/emps';

export const listEmployees = () => {
    return axios.get(REST_API_BASE_URL);
}

export const addEmployees = (employee) => {
    return axios.post(REST_API_BASE_URL + '/create-emp', employee)
}