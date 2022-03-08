import React, { useContext, useState, useEffect } from 'react'

const ProjectContext = React.createContext()

export const ProjectProvider = ({ children }) => {
  const [loginModal, setLoginModal] = useState(false)
  const loginModalClose = () => setLoginModal(false)
  const loginModalShow = () => setLoginModal(true)

  const [registerModal, setRegisterModal] = useState(false)
  const RegisterClose = () => setRegisterModal(false)
  const RegisterShow = () => setRegisterModal(true)

  const [userData, setUserData] = useState('')

  return (
    <ProjectContext.Provider
      value={{
        loginModal,
        loginModalClose,
        loginModalShow,
        registerModal,
        RegisterClose,
        RegisterShow,
        setRegisterModal,
        userData,
        setUserData,
      }}
    >
      {children}
    </ProjectContext.Provider>
  )
}
export const useProjectContext = () => {
  return useContext(ProjectContext)
}
