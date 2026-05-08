import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem('sst_admin_auth') === 'true'
  )

  const login = (email, password) => {
    // Admin credentials
    if (email === 'sabarish@sst.com' && password === 'Sabarish_KC25') {
      setIsAuthenticated(true)
      localStorage.setItem('sst_admin_auth', 'true')
      return true
    }
    return false
  }

  const logout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('sst_admin_auth')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
