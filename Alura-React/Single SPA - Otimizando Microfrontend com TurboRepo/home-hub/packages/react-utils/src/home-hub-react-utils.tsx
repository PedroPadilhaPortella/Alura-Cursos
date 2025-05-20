import Cookies from "universal-cookie";

export interface AuthForm {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
}

export interface AuthInfo {
  authId: number;
  email: string;
  firstName?: string;
  lastName?: string;
}

export function setAuthentication({ email, firstName, lastName }: AuthForm) {
  const authId = email.replace("@", "").replace(".", "").codePointAt(1);
  const cookies = new Cookies(null, { path: "/" });
  cookies.set("auth", { email, firstName, lastName, authId });
  location.replace(`/dashboard/${authId}`);
}

export function getAuthInfo(): {
  authInfo: AuthInfo;
  isAuthenticated: boolean;
} {
  const cookies = new Cookies(null, { path: "/" });
  const auth = cookies.get("auth");

  console.log("Auth Cookie", auth);

  if (!auth || !location.pathname.includes(auth.authId.toString()))
    return { isAuthenticated: false, authInfo: undefined };

  return { authInfo: auth, isAuthenticated: true };
}

export function updateAuthInfo(data: AuthInfo) {
  const cookies = new Cookies(null, { path: "/" });
  const auth = cookies.get("auth");

  if (!auth || !location.pathname.includes(auth.authId.toString())) {
    logout();
  }

  cookies.set("auth", data);
  location.replace(`/dashboard/${data.authId}/`);
}

export function logout() {
  const cookies = new Cookies(null, { path: "/" });
  cookies.remove("auth");
  location.replace("/");
}
