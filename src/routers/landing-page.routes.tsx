import { Route, Routes } from 'react-router-dom'
import { AboutUs, ContactUs, Home, Services } from '@/modules/main/Pages'

export const LanginPage = () => {
	return (
		<div className="container-fluid">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/services" element={<Services />} />
				<Route path="/about" element={<AboutUs />} />
				<Route path="/contact" element={<ContactUs />} />
			</Routes>
		</div>
	)
}
