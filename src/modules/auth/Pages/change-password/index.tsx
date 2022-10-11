import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import { InputWithErrors } from '@/components'
import Swal from 'sweetalert2'
import { ChangePasswordService } from '@/services/auth.services'
import { IChangePassword } from '@/interfaces/User'

export const ChangePassword = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IChangePassword>()

	const [stateForm, setStateForm] = useState<IChangePassword>({
		email: '',
		password: '',
		new_password: '',
	})
	// const [sentEmail, setSentEmail] = useState<boolean>(false)

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setStateForm({
			...stateForm,
			[e.target.name]: e.target.name,
		})
	}

	const onSubmit: SubmitHandler<IChangePassword> = async () => {
		try {
			const response = await ChangePasswordService(stateForm)
			Swal.fire({
				position: 'center',
				icon: 'success',
				title: response.data.msg,
				showConfirmButton: false,
				timer: 1500,
			})
			// setSentEmail(true)
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
							<h4>Cambiar su contraseña</h4>
						</div>
						<div className="card-body">
							<form onSubmit={handleSubmit(onSubmit)}>
								<InputWithErrors
									label="Correo Electronico"
									type="text"
									name="email"
									errors={errors}
									register={register}
									onChange={handleOnChange}
									stateForm={stateForm.email}
								/>

								<InputWithErrors
									label="Contraseña actual"
									type="password"
									name="password"
									errors={errors}
									register={register}
									onChange={handleOnChange}
									stateForm={stateForm.email}
								/>

								<InputWithErrors
									label="Nueva contraseña Contraseña"
									type="password"
									name="new_password"
									errors={errors}
									register={register}
									onChange={handleOnChange}
									stateForm={stateForm.email}
								/>

								<div className="d-grid mt-3	">
									<button className="btn btn-primary" type="submit">
										Actualizar
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
