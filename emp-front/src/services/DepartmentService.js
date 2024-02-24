import axios from "axios"

const REST_API_BASE_URL = 'http://localhost:8080/api/departments';

export const listDepartments = () => {
    return axios.get(REST_API_BASE_URL);
}

export const addDepartment = (department) => {
    return axios.post(REST_API_BASE_URL + '/create-dept', department);
}

export const getDepartmentById = (departmentId) => {
    return axios.get(REST_API_BASE_URL + '/' + departmentId);
}

export const updateDepartmentById = (departmentId, department) => {
    return axios.put(REST_API_BASE_URL + '/' + departmentId, department);
}

export const deleteDepartmentById = (departmentId) => {
    return axios.delete(REST_API_BASE_URL + '/' + departmentId);
}