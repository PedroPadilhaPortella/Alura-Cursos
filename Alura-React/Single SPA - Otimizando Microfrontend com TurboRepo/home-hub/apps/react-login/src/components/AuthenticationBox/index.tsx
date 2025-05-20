import { useState } from "react";

import { Box, Container, Link, Typography } from "@mui/material";

import HomeHubLogo from "../../assets/logo.png";

import RegisterForm from "../RegisterForm";
import LoginForm from "../LoginForm";

const AuthenticationBox = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleIsLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          bgcolor: "#F5F5F5",
          height: "65vh",
          mt: "10vh",
          borderRadius: "24px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img src={HomeHubLogo} alt="logo" width={140} style={{ margin: 36 }} />
        <Typography sx={{ fontSize: 18, fontWeight: 700 }}>
          {isLogin ? "Login" : "Cadastre-se"}
        </Typography>
        <Typography sx={{ fontSize: 14, fontWeight: 400 }}>
          Insira seus dados para acessar o hub.
        </Typography>
        {isLogin ? (
          <>
            <LoginForm />
            <Link
              onClick={() => toggleIsLogin()}
              component="button"
              underline="hover"
              sx={{ mt: "1em" }}
            >
              Ainda não tenho uma conta
            </Link>
          </>
        ) : (
          <>
            <RegisterForm />
            <Link
              onClick={() => toggleIsLogin()}
              component="button"
              underline="hover"
              sx={{ mt: "1em" }}
            >
              Já tenho uma conta
            </Link>
          </>
        )}
      </Box>
    </Container>
  );
};

export default AuthenticationBox;
