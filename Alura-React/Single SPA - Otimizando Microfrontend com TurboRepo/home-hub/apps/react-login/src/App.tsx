import AuthenticationBox from "./components/AuthenticationBox";

import backgroundImage from "./assets/background.png";

export default function App() {
  return (
    <div
      id="single-spa-application:react-login"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 1000,
        backgroundRepeat: "repeat-x",
        backgroundPosition: "bottom",
        height: "90vh",
      }}
    >
      <AuthenticationBox />
    </div>
  );
}
