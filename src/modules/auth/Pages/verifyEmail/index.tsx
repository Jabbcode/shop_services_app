import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

import { LoadingCircle } from '@/components/LoadingCircle'
import { setStateBoolean } from '@/interfaces/types'

interface IProps {
	setLogged: setStateBoolean
}

export const VerifyEmail = ({ setLogged }: IProps) => {
	const { token } = useParams()
	const navigate = useNavigate()

	const handleVerified = async () => {
		try {
			const response = await axios.put(`http://localhost:3000/api/v1/auth/verify-email`, '', {
				headers: {
					'x-access-token': token,
				},
			})
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
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		handleVerified()
	}, [])

	return <LoadingCircle />
}
