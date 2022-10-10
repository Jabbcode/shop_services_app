import { Navigate } from 'react-router-dom'

interface IPropsRoute {
	children: JSX.Element
	logged: boolean
}

export const PrivateRoute = ({ children, logged }: IPropsRoute) => {
	return logged ? children : <Navigate replace to="/login" />
}
