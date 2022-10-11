import { Link, NavLink } from 'react-router-dom'
export const NavigationMain = () => {
	return (
		<>
			<div className="bg-primary">
				<div className="container d-flex justify-content-between align-items-center text-light" style={{ height: '50px' }}>
					<div>Logo</div>
					<div className="d-flex">
						<div className="d-flex">
							{' '}
							<span className="mx-3">
								<i className="fa-solid fa-envelope"></i>
							</span>{' '}
							<span>contacto@shopservices.com</span>
						</div>
						<div className="d-flex">
							{' '}
							<span className="mx-3">
								<i className="fa-solid fa-phone"></i>
							</span>{' '}
							<span>+58 (424) 7415 96 85 </span>
						</div>
					</div>
					<div className="d-flex">
						<span className="mx-3">
							<a href="#" className="text-light">
								<i className="fa-brands fa-facebook"></i>
							</a>
						</span>
						<span className="mx-3">
							<a href="#" className="text-light">
								<i className="fa-brands fa-instagram"></i>
							</a>
						</span>
						<span className="mx-3">
							<a href="#" className="text-light">
								<i className="fa-brands fa-twitter"></i>
							</a>
						</span>
					</div>
				</div>
			</div>
			<nav className="navbar navbar-expand-lg">
				<div className="container  d-flex justify-content-between">
					<div>
						<Link className="navbar-brand" to="/">
							Shop Services
						</Link>
					</div>
					<div id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<NavLink
									style={({ isActive }): any => {
										isActive ? 'active' : ''
									}}
									className="nav-link"
									to="/about"
								>
									¿Quienes somos?
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									style={({ isActive }): any => {
										isActive ? 'active' : ''
									}}
									className="nav-link"
									to="/services"
								>
									Servicios
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									style={({ isActive }): any => {
										isActive ? 'active' : ''
									}}
									className="nav-link"
									to="/contact"
								>
									Contacto
								</NavLink>
							</li>
							<div className="d-flex">
								<li className="nav-item">
									<NavLink
										style={({ isActive }): any => {
											isActive ? 'active' : ''
										}}
										className="nav-link"
										to="/login"
									>
										Inicio de Sesion
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink
										style={({ isActive }): any => {
											isActive ? 'active' : ''
										}}
										className="nav-link"
										to="/register"
									>
										Registro
									</NavLink>
								</li>
							</div>
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}
