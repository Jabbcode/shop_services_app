import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login, Register } from "../modules/auth"


export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route 
                path="/login" 
                element={<Login />} 
            />
            <Route 
                path="/register" 
                element={<Register />} 
            />
        </Routes>
    </BrowserRouter>
  )
}
