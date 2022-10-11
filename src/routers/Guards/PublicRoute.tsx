import { Navigate } from 'react-router-dom'

interface IPropsRoute {
	children: JSX.Element
	logged: boolean
}

export const PublicRoute = ({ children, logged }: IPropsRoute) => {
	return logged ? <Navigate replace to="/dashboard" /> : children
}
