import axios from 'axios'
import { ILogin, IRegister, User } from '@/interfaces/User'

const BASE_URL = 'http://localhost:3000/api/v1/auth'

interface IResponse {
	msg?: string
	user: User
	token?: string
}

export const LoginService = (data: ILogin) => {
	return axios.post<IResponse>(`${BASE_URL}/login`, data)
}

export const RegisterService = (data: IRegister) => {
	return axios.post<IResponse>(`${BASE_URL}/register`, data)
}

export const ForgotPasswordServive = (data: String) => {
	return axios.post<IResponse>(`${BASE_URL}/forgot-password`, { email: data })
}

export const NewPasswordService = (data: String, token: string) => {
	return axios.post<IResponse>(
		`${BASE_URL}/new-password`,
		{ new_password: data },
		{
			headers: {
				'x-access-token': token,
			},
		}
	)
}
