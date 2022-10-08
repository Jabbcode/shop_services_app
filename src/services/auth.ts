import axios from 'axios'
import { User } from '../interfaces/User'

const BASE_URL = 'http://localhost:3000/api/v1/auth'

export const LoginService = (data: User) => {
	return axios.post(`${BASE_URL}/login`, data)
}

export const RegisterService = (data: User) => {
	console.log(data)
	return axios.post(`${BASE_URL}/register`, data)
}
