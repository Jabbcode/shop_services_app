interface IProps {
	label: string
	type: string
	errors: any
	register: any
	name: string
	onChange: Function
	stateForm: any
}

export const InputWithErrors = ({ label, type, errors, register, name, onChange, stateForm }: IProps) => {
	return (
		<div className="row mt-3">
			<label className="form-label col-sm-4">{label}</label>
			<div className="col-sm-8">
				<input
					type={type}
					className={`form-control ${errors[name] && 'is-invalid'}`}
					{...register(name, {
						required: true,
					})}
					onChange={onChange}
					value={stateForm[name]}
				/>
				{errors[name] && <span className="invalid-feedback">Este campo es obligatorio</span>}
			</div>
		</div>
	)
}
