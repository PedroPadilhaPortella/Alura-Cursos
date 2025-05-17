import { Box, Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

import { AuthForm } from '../../../../utils/src/home-hub-utils';
import { setAuthentication } from '@home-hub/react-utils';

const LoginForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<AuthForm>();

  const emailValidations = {
    required: 'Campo de e-mail obrigatório',
    pattern: { value: /\S+@\S+\.\S+/, message: 'E-mail inválido' }
  };

  const passwordValidations = {
    required: 'Campo de senha obrigatório'
  }

  const onSubmit = (data: AuthForm) => setAuthentication(data);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <TextField id='email' label='E-mail' variant='standard'
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