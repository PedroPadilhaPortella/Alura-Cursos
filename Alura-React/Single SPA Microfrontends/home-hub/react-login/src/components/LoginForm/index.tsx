import { Box, Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

type FormValues = {
  email: string;
  password: string;
}

const LoginForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const emailValidations = {
    required: 'Campo de e-mail obrigatório',
    pattern: { value: /\S+@\S+\.\S+/, message: 'E-mail inválido' }
  };

  const passwordValidations = {
    required: 'Campo de senha obrigatório'
  }

  const onSubmit = ({ email }: FormValues) => {
    const authId = email.replace('@', '').replace('.', '').codePointAt(1);
    localStorage.setItem('auth', JSON.stringify({ email, authId }));
    location.replace(`/dashboard/${authId}`);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <TextField id='email' label='Email' variant='standard'
        error={!!errors.email} helperText={errors.email?.message}
        {...register('email', emailValidations)}
        sx={{ marginTop: '16px', marginX: '32px' }}
      />
      <TextField id='password' type="password" label='Password' variant='standard'
        error={!!errors.password} helperText={errors.password?.message}
        {...register('password', passwordValidations)}
        sx={{ marginTop: '16px', marginX: '32px' }}
      />
      <Button variant='contained' onClick={handleSubmit(onSubmit)}
        sx={{ backgroundColor: '#9C27B0', marginTop: '20px', marginX: '32px' }}>
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;