import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

export const VerifyEmail = () => {
	const { token } = useParams()

	console.log(token)

	const handleVerified = async () => {
		try {
			const response = await axios.put(`http://localhost:3000/api/v1/auth/verify-email`, '', {
				headers: {
					'x-access-token': token,
				},
			})
			console.log(response)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		handleVerified()
	}, [])

	return (
		<div>
			<h2>Verificando papa...</h2>
		</div>
	)
}
