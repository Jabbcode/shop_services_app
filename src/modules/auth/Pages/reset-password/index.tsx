import { useForm, SubmitHandler } from 'react-hook-form'
import React from 'react'
import { useState } from 'react'
import { InputWithErrors } from '@/components'
import Swal from 'sweetalert2'
import { NewPasswordService } from '../../../../services/auth'
import { useNavigate, useParams } from 'react-router-dom'
import { INewPassword } from '@/interfaces/User'

export const ResetPassword = () => {
	const { token } = useParams()
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<INewPassword>()

	const [stateForm, setStateForm] = useState<INewPassword>({
		new_password: '',
		rePassword: '',
	})

	// const [sentEmail, setSentEmail] = useState<boolean>(false)

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setStateForm({
			...stateForm,
			[e.target.name]: e.target.value,
		})
	}

	const onSubmit: SubmitHandler<INewPassword> = async () => {
		console.log(stateForm)

		try {
			const response = await NewPasswordService(stateForm.new_password, String(token))
			Swal.fire({
				position: 'center',
				icon: 'success',
				title: response.data.msg,
				showConfirmButton: false,
				timer: 1500,
			})
			navigate('/login', { replace: true })
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

	return (
		<div className="container mt-5">
			<div className="row w-50 m-auto">
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h4>Restablece tu contraseña</h4>
						</div>
						<div className="card-body">
							<form onSubmit={handleSubmit(onSubmit)}>
								<InputWithErrors
									label="Contraseña"
									type="password"
									name="new_password"
									errors={errors}
									register={register}
									onChange={handleOnChange}
									stateForm={stateForm.new_password}
								/>

								<InputWithErrors
									label="Repetir Contraseña"
									type="password"
									name="rePassword"
									errors={errors}
									register={register}
									onChange={handleOnChange}
									stateForm={stateForm.rePassword}
								/>

								<div className="d-grid mt-3	">
									<button className="btn btn-primary" type="submit">
										Enviar
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
