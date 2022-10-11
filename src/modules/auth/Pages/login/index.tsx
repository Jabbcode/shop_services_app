import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'

import Swal from 'sweetalert2'

import { ILogin } from '@/modules/auth/interfaces/User'
import { LoginService } from '@/services/auth.services'
import { InputWithErrors } from '@/components'
import { setStateBoolean } from '@/modules/auth/interfaces/types'

interface IProps {
	setLogged: setStateBoolean
}

export const Login = ({ setLogged }: IProps) => {
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ILogin>()

	const [stateForm, setStateForm] = useState<ILogin>({
		email: '',
		password: '',
	})

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setStateForm({
			...stateForm,
			[e.target.name]: e.target.value,
		})
	}

	const onSubmit: SubmitHandler<ILogin> = async () => {
		try {
			const { data } = await LoginService(stateForm)
			Swal.fire({
				position: 'center',
				icon: 'success',
				title: data.msg,
				showConfirmButton: false,
				timer: 1500,
			})
			setLogged(true)
			navigate('/home', { replace: true })
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
							<h4>Iniciar Sesion</h4>
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
								<div className="d-grid mt-3	">
									<button className="btn btn-primary" type="submit">
										Iniciar Sesion
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
								<Link to="/register" className="text-center">
									Ir al Registro
								</Link>
								<Link to="/forgot-password" className="text-center">
									¿Olvido su Contraseña?
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
