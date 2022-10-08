import { useState } from "react"
import { User } from "../../../../interfaces/User"
import { RegisterService } from "../../../../services/auth"

export const Register = () => {
  
  const [stateForm, setStateForm] = useState<User>({
    firstname: '',
    lastname: '',
    phone: '',
    address: '',
    email: '',
    password: ''
  })

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStateForm({
      ...stateForm,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(stateForm)

    try {
      const response = await RegisterService(stateForm)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <h3>Registro</h3>
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder="Nombre" onChange={handleOnChange} name="firstname" value={stateForm.firstname} />
      <input type='text' placeholder="Apellido" onChange={handleOnChange} name="lastname" value={stateForm.lastname} />
      <input type='text' placeholder="Telefono" onChange={handleOnChange} name="phone" value={stateForm.phone} />
      <input type='text' placeholder="Direccion" onChange={handleOnChange} name="address" value={stateForm.address} />
      <input type='text' placeholder="Correo electronico" onChange={handleOnChange} name="email" value={stateForm.email} />
      <input type='password' onChange={handleOnChange} name="password" value={stateForm.password} />
      <button type="submit">Registrarse</button>
    </form>
    </>
  )
}
