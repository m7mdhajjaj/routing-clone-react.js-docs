import { useLocation } from "react-router-dom";
const LoginPage = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h2 className="text-center mb-3">Login to Contribute</h2>
      <form className="space-y-3 max-w-sm mx-auto">
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />

        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
