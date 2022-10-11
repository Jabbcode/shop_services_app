import imgMain from '../../../../assets/imagen_principal.jpeg'

export const Home = () => {
	return (
		<div className="container">
			<img src={imgMain} alt="Imagen principal" style={{ width: '100%', height: '300px' }} />
		</div>
	)
}
