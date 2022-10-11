export const LoadingCircle = () => {
	return (
		<div
			style={{
				width: '100%',
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignContent: 'center',
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<div
					className="spinner-border text-primary"
					role="status"
					style={{
						width: '7rem',
						height: '7rem',
					}}
				>
					<span className="visually-hidden">Loading...</span>
				</div>
				<div style={{ marginTop: '10px' }}>{/* <span>Cargando...</span> */}</div>
			</div>
		</div>
	)
}
