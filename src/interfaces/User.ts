export interface User {
	firstname: string
	lastname: string
	phone: string
	address: string
	email: string
	password: string
}

export interface ILogin {
	email: string
	password: string
}

export interface IRegister extends User {}

export interface INewPassword {
	new_password: string
	rePassword: string
}
