import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  const token = sessionStorage.getItem('sst_admin_token')
  if (!token) return <Navigate to="/admin" replace />
  return children
}
