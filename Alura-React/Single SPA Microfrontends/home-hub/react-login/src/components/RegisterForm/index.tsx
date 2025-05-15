import { Box, Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const RegisterForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const firstNameValidations = {
    required: 'Campo de nome obrigatório'
  }

  const lastNameValidations = {
    required: 'Campo de sobrenome obrigatório'
  }

  const emailValidations = {
    required: 'Campo de e-mail obrigatório',
    pattern: { value: /\S+@\S+\.\S+/, message: 'E-mail inválido' }
  };

  const passwordValidations = {
    required: 'Campo de senha obrigatório'
  }

  const onSubmit = ({ email, firstName }: FormValues) => {
    const authId = email.replace('@', '').replace('.', '').codePointAt(1);
    localStorage.setItem('auth', JSON.stringify({ email, firstName, authId }));
    location.replace(`/dashboard/${authId}`);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <TextField id='firstName' label='Nome' variant='standard'
        error={!!errors.firstName} helperText={errors.firstName?.message}
        {...register('firstName', firstNameValidations)}
        sx={{ marginTop: '16px', marginX: '32px' }}
      />
      <TextField id='lastName' label='Sobrenome' variant='standard'
        error={!!errors.lastName} helperText={errors.lastName?.message}
        {...register('lastName', lastNameValidations)}
        sx={{ marginTop: '16px', marginX: '32px' }}
      />
      <TextField id='email' label='Email' variant='standard'
        error={!!errors.email} helperText={errors.email?.message}
        {...register('email', emailValidations)}
        sx={{ marginTop: '16px', marginX: '32px' }}
      />
      <TextField id='password' type="password" label='Senha' variant='standard'
        error={!!errors.password} helperText={errors.password?.message}
        {...register('password', passwordValidations)}
        sx={{ marginTop: '16px', marginX: '32px' }}
      />
      <Button variant='contained' onClick={handleSubmit(onSubmit)}
        sx={{ backgroundColor: '#9C27B0', marginTop: '20px', marginX: '32px' }}>
        Cadastrar
      </Button>
    </Box>
  );
};

export default RegisterForm;