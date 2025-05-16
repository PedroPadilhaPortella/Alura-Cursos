import { useState, useEffect } from 'react';

import { Box, Button, Container, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

import { AuthInfo, getAuthInfo, updateAuthInfo } from '../../../../utils/src/home-hub-utils';

type EditProfileForm = Omit<AuthInfo, 'authId'>;

const EditProfile = () => {
  const { authInfo } = getAuthInfo();

  const {
    register, handleSubmit, formState: { errors }
  } = useForm<EditProfileForm>({ defaultValues: authInfo });

  const firstNameValidations = { required: 'Campo de nome obrigatório' }

  const emailValidations = {
    required: 'Campo de e-mail obrigatório',
    pattern: { value: /\S+@\S+\.\S+/, message: 'E-mail inválido' }
  };

  const onSubmit = (data: EditProfileForm) => updateAuthInfo({ ...data, authId: authInfo.authId });

  return (
    <Container maxWidth='xs'>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <TextField id='email' label='E-mail' variant='standard'
          error={!!errors.email} helperText={errors.email?.message}
          {...register('email', emailValidations)}
          sx={{ marginTop: '16px', marginX: '32px' }}
        />
        <TextField id='firstName' label='Nome' variant='standard'
          error={!!errors.firstName} helperText={errors.firstName?.message}
          {...register('firstName', firstNameValidations)}
          sx={{ marginTop: '16px', marginX: '32px' }}
        />
        <TextField id='lastName' label='Sobrenome' variant='standard'
          error={!!errors.lastName} helperText={errors.lastName?.message}
          {...register('lastName')}
          sx={{ marginTop: '16px', marginX: '32px' }}
        />
        <Button variant='contained' onClick={handleSubmit(onSubmit)}
          sx={{ backgroundColor: '#9C27B0', marginTop: '20px', marginX: '32px' }}>
          Atualizar Perfil
        </Button>
      </Box>
    </Container>
  );
};

export default EditProfile;