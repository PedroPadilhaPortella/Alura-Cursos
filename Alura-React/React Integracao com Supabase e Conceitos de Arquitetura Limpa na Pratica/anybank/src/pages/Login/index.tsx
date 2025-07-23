import { useState } from "react";
import { Button } from "../../components/Button";
import { Fieldset } from "../../components/Fieldset";
import { Figure, Form, FormActions, Heading, Image } from "../../components/Form";
import { FormLabel } from "../../components/FormLabel";
import { TextField } from "../../components/TextField";
import { useAuthContext } from "../../hooks/useAuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({ email: '', password: '' });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const loginUser = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    try {
      await login(credentials.email, credentials.password);
      toast.success('Login efetuado com Sucesso. Bem vindo ao Anybank!');
      setCredentials({ email: '', password: '' });
      navigate('/')
    } catch (error) {
      console.log('Falha ao efetuar login, confirme seus dados', error);
      toast.error('Falha ao efetuar login, confirme seus dados!');
    }
  };

  return (
    <>
      <Figure>
        <Image src="/imgs/login.png" />
      </Figure>
      <div>
        <Heading>
          Login
        </Heading>
        <p>Preencha os dados do login.</p>
        <Form onSubmit={loginUser}>
          <Fieldset>
            <FormLabel>
              Email
            </FormLabel>
            <TextField
              name="email"
              type="email"
              placeholder="Digite seu email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </Fieldset>
          <Fieldset>
            <FormLabel>
              Senha
            </FormLabel>
            <TextField
              name="password"
              type="password"
              placeholder="Digite sua senha"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </Fieldset>
          <FormActions>
            <Button type="submit">
              Efetuar login
            </Button>
          </FormActions>
        </Form>
      </div>
    </>
  );
};

export default Login;