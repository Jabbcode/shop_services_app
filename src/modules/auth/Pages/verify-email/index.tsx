import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

import { LoadingCircle } from '@/components/LoadingCircle'
import { setStateBoolean } from '@/modules/auth/interfaces/types'
import { VeryEmailService } from '@/services/auth.services'

interface IProps {
	setLogged: setStateBoolean
}

export const VerifyEmail = ({ setLogged }: IProps) => {
	const { token } = useParams()
	const navigate = useNavigate()

	const handleVerified = async () => {
		try {
			const response = await VeryEmailService(String(token))

			if (response.data.user.email_validated === true) {
				setLogged(true)
				navigate('/home', { replace: true })
			} else {
				Swal.fire({
					position: 'center',
					icon: 'success',
					title: 'Algo malo ocurrio papa...',
					showConfirmButton: false,
					timer: 1500,
				})
				navigate('/login', { replace: true })
			}
		} catch (error: any) {
			console.log(error)
			if (error.response.data.msg) {
				console.log(error.response.data.msg)

				Swal.fire({
					position: 'center',
					icon: 'warning',
					title: String(error.response.data.msg),
					showConfirmButton: false,
					timer: 1500,
				})
			} else {
				console.log(error.response.data[0].msg)

				Swal.fire({
					position: 'center',
					icon: 'warning',
					title: String(error.response.data[0].msg),
					showConfirmButton: false,
					timer: 1500,
				})
			}
		}
	}

	useEffect(() => {
		handleVerified()
	}, [])

	return <LoadingCircle />
}
