import { Route, Routes } from 'react-router-dom'
import { ChangePassword, ForgotPassword, Login, Register, ResetPassword, VerifyEmail } from '@/modules/auth/Pages'
import { PublicRoute } from './Guards'
import { setStateBoolean } from '@/modules/auth/interfaces/types'

interface IProps {
	logged: boolean
	setLogged: setStateBoolean
}

export const Auth = ({ logged, setLogged }: IProps) => {
	return (
		<Routes>
			<Route path="/verify-email/:token" element={<VerifyEmail setLogged={setLogged} />} />

			<Route path="/forgot-password" element={<ForgotPassword />} />

			<Route path="/reset-password/:token" element={<ResetPassword />} />

			<Route path="/change-password" element={<ChangePassword />} />

			<Route
				path="/login"
				element={
					<PublicRoute logged={logged}>
						<Login setLogged={setLogged} />
					</PublicRoute>
				}
			/>

			<Route
				path="/register"
				element={
					<PublicRoute logged={logged}>
						<Register />
					</PublicRoute>
				}
			/>
		</Routes>
	)
}
