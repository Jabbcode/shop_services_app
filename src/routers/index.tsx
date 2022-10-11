import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ChangePassword, ForgotPassword, Login, Register, ResetPassword, VerifyEmail } from '@/modules/auth/Pages'
import { PrivateRoute, PublicRoute } from './Guards'
import { useState } from 'react'

export const Router = () => {
	const [logged, setLogged] = useState<boolean>(false)

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate replace to="/dashboard" />} />

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

				<Route
					path="/*"
					element={
						<PrivateRoute logged={logged}>
							<>Dashboard</>
						</PrivateRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	)
}
