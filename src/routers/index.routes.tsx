import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PrivateRoute } from './Guards'
import { useState } from 'react'
import { Auth } from './auth.routes'
import { LanginPage } from './landing-page.routes'
import { NavigationMain } from '@/components'

export const Router = () => {
	const [logged, setLogged] = useState<boolean>(false)

	return (
		<BrowserRouter>
			<NavigationMain />

			<LanginPage />

			<Auth logged={logged} setLogged={setLogged} />

			<Routes>
				<Route
					path="/dashboard"
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
