import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Parcel from "single-spa-react/parcel";

import { Box, Button, Container, Snackbar, TextField } from '@mui/material';

import { AuthInfo } from '../../../../utils/src/home-hub-utils';
import { getAuthInfo, updateAuthInfo } from '@home-hub/react-utils';

type EditProfileForm = Omit<AuthInfo, 'authId'>;

const EditProfile = () => {
  const { authInfo } = getAuthInfo();

  const [dialogVisibility, setDialogVisibility] = useState(false);
  const [snackbarVisibility, setSnackbarVisibility] = useState(false);

  const {
    register, handleSubmit, formState: { errors }
  } = useForm<EditProfileForm>({ defaultValues: authInfo });

  const firstNameValidations = { required: 'Campo de nome obrigatório' }

  const emailValidations = {
    required: 'Campo de e-mail obrigatório',
    pattern: { value: /\S+@\S+\.\S+/, message: 'E-mail inválido' }
  };

  const onSubmit = (data: EditProfileForm) => {
    setDialogVisibility(false);
    setSnackbarVisibility(true);
    setTimeout(() => {
      updateAuthInfo({ ...data, authId: authInfo.authId });
    }, 3000);
  }

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
        <Button variant='contained' onClick={() => setDialogVisibility(true)}
          sx={{ backgroundColor: '#9C27B0', marginTop: '20px', marginX: '32px' }}>
          Atualizar Perfil
        </Button>
      </Box>
      {dialogVisibility && (
        <Parcel config={() => System.import('@home-hub/react-parcel') as any}
          title='Home Hub'
          description='Deseja confirmar as alterações?'
          leftButtonMessage='Cancelar'
          rightButtonMessage='Confirmar'
          onClose={() => setDialogVisibility(false)}
          onLeftButtonClick={() => setDialogVisibility(false)}
          onRightButtonClick={handleSubmit(onSubmit)}
          isVisible={dialogVisibility}
        />
      )}
      {snackbarVisibility && (
        <Snackbar
          open={snackbarVisibility}
          autoHideDuration={2000}
          message='Edição de Usuário efetuada com sucesso!'
        />
      )}
    </Container>
  );
};

export default EditProfile;