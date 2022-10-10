import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Login, Register, VerifyEmail } from '@/modules/auth/Pages'
import { PrivateRoute, PublicRoute } from './Guards'
import { useState } from 'react'

export const Router = () => {
	const [logged, setLogged] = useState<boolean>(false)

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate replace to="/home" />} />

				<Route path="/verify-email/:token" element={<VerifyEmail />} />

				<Route
					path="/login"
					element={
						<PublicRoute logged={logged}>
							<Login />
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
							<>Home</>
						</PrivateRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	)
}
