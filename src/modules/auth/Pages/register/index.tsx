import { useState } from 'react'
import { Link } from 'react-router-dom'

import Swal from 'sweetalert2'

import { IRegister } from '@/modules/auth/interfaces/User'
import { RegisterService } from '@/services/auth.services'
import { useForm, SubmitHandler } from 'react-hook-form'
import { InputWithErrors } from '@/components'

export const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IRegister>()

	const [stateForm, setStateForm] = useState<IRegister>({
		firstname: '',
		lastname: '',
		phone: '',
		address: '',
		email: '',
		password: '',
	})

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setStateForm({
			...stateForm,
			[e.target.name]: e.target.value,
		})
	}

	const onSubmit: SubmitHandler<IRegister> = async () => {
		try {
			const { data } = await RegisterService(stateForm)
			console.log(data)

			Swal.fire({
				position: 'center',
				icon: 'success',
				title: data.msg,
				showConfirmButton: false,
				timer: 1500,
			})
		} catch (error: any) {
			if (error.response.data.msg) {
				console.log(error.response.data.msg)

				Swal.fire({
					position: 'center',
					icon: 'warning',
					title: error.response.data.msg,
					showConfirmButton: false,
					timer: 1500,
				})
			} else {
				console.log(error.response.data[0].msg)

				Swal.fire({
					position: 'center',
					icon: 'warning',
					title: error.response.data[0].msg,
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
							<h4>Registro</h4>
						</div>
						<div className="card-body">
							<form onSubmit={handleSubmit(onSubmit)}>
								<InputWithErrors
									label="Nombre"
									type="text"
									name="firstname"
									errors={errors}
									register={register}
									onChange={handleOnChange}
									stateForm={stateForm}
								/>
								<InputWithErrors
									label="Apellido"
									type="text"
									name="lastname"
									errors={errors}
									register={register}
									onChange={handleOnChange}
									stateForm={stateForm}
								/>
								<InputWithErrors
									label="Telefono"
									type="text"
									name="phone"
									errors={errors}
									register={register}
									onChange={handleOnChange}
									stateForm={stateForm}
								/>
								<InputWithErrors
									label="Direccion"
									type="text"
									name="address"
									errors={errors}
									register={register}
									onChange={handleOnChange}
									stateForm={stateForm}
								/>
								<InputWithErrors
									label="Correo Electronico"
									type="text"
									name="email"
									errors={errors}
									register={register}
									onChange={handleOnChange}
									stateForm={stateForm}
								/>
								<InputWithErrors
									label="Contraseña"
									type="password"
									name="password"
									errors={errors}
									register={register}
									onChange={handleOnChange}
									stateForm={stateForm}
								/>
								<div className="d-grid mt-3">
									<button className="btn btn-primary" type="submit">
										Registrarse
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className="mt-3">
					<div className="row m-auto">
						<div className="col-12">
							<div className="d-flex justify-content-between">
								<Link to="/login" className="text-center">
									Ir al Inicio de Sesion
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
