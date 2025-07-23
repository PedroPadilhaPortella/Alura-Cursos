import { Outlet } from "react-router"
import { ToastContainer } from "react-toastify"
import styled from "styled-components"
import { Header } from "../presentation/Header"
import { AuthProvider } from "../hooks/context/AuthContext"

const Container = styled.div`
  display: flex;
  gap: 24px;
  width: 1200px;
  margin: 24px auto;
`

const RootLayout = () => {
  return (
    <AuthProvider>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <ToastContainer />
    </AuthProvider>
  )
}

export default RootLayout
