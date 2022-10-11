import { useForm, SubmitHandler } from 'react-hook-form'
import React from 'react'
import { useState } from 'react'
import { InputWithErrors } from '@/components'
import Swal from 'sweetalert2'
import { ForgotPasswordServive } from '@/services/auth.services'

export const ForgotPassword = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<String>()

	const [email, setEmail] = useState<String>('')
	const [sentEmail, setSentEmail] = useState<boolean>(false)

	const onSubmit: SubmitHandler<String> = async () => {
		console.log(email)

		try {
			const response = await ForgotPasswordServive(email)
			Swal.fire({
				position: 'center',
				icon: 'success',
				title: response.data.msg,
				showConfirmButton: false,
				timer: 1500,
			})
			setSentEmail(true)
		} catch (error: any) {
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
							<h4>Restablecer tu contraseña</h4>
						</div>
						<div className="card-body">
							{!sentEmail ? (
								<form onSubmit={handleSubmit(onSubmit)}>
									<InputWithErrors
										label="Correo Electronico"
										type="text"
										name="email"
										errors={errors}
										register={register}
										onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
										stateForm={email}
									/>

									<div className="d-grid mt-3	">
										<button className="btn btn-primary" type="submit">
											Siguiente
										</button>
									</div>
								</form>
							) : (
								`Se ha enviado un correo electrónico a ${email}. Si esta dirección de correo electrónico está registrada a Shop Services, recibirás instrucciones sobre cómo establecer una nueva contraseña.`
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
