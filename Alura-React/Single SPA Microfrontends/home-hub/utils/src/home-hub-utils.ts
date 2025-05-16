export type AuthForm = {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
}

export type AuthInfo = {
  authId: number;
  email: string;
  firstName?: string;
  lastName?: string;
}

export const setAuthentication = ({ email, firstName, lastName }: AuthForm) => {
  const authId = email.replace('@', '').replace('.', '').codePointAt(1);
  localStorage.setItem('auth', JSON.stringify({ email, firstName, lastName, authId }));
  location.replace(`/dashboard/${authId}`);
};

export const getAuthInfo = (): { authInfo: AuthInfo; isAuthenticated: boolean } => {
  const auth = JSON.parse(localStorage.getItem('auth'));

  if (!auth || !location.pathname.includes(auth.authId.toString()))
    return { isAuthenticated: false, authInfo: undefined };

  return { authInfo: auth, isAuthenticated: true };
};

export const updateAuthInfo = (data: AuthInfo) => {
  const auth = JSON.parse(localStorage.getItem('auth'));

  if (!auth || !location.pathname.includes(auth.authId.toString())) {
    alert('Você não tem permissão para alterar os dados desta conta.');
    logout();
  }

  localStorage.setItem('auth', JSON.stringify(data));
  alert('Dados atualizados com sucesso');
  location.replace(`/dashboard/${data.authId}/`);
}

export const logout = () => {
  localStorage.removeItem('auth');
  location.replace('/');
}