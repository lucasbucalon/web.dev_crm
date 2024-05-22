import { ReactNode, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './Context'

export default function PrivateRoute({ children }: { children: ReactNode }) {
  const { logado } = useContext(AuthContext)
  return logado ? children : <Navigate to="/app" />
}
