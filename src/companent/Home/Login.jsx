import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLogin } from "../../redux/loginSlice";

import { useNavigate } from "react-router-dom";
import Product from './Product';
import Loading from "../Loading";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {logins} = useSelector(state => state.logins)
  const {loginStatus} = useSelector(state => state.logins)

  
console.log(logins,"login")
const handleLogin = async () => {
  const userData = {
    username: username,
    password: password,
  };
   dispatch(addLogin(userData));

  if (logins) {
    // İlgili duruma göre sayfayı yönlendirin
    if (
      (username === "mor_2314" && password === "83r5^_") ||
      (username === "johnd" && password === "m38rmF$")
    ) {
      navigate("/");
    } else {
      console.log("giriş hatalı");
    }
  
};
}

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-400 py-12 px-4 sm:px-6 lg:px-8">
      <div>  {loginStatus === "LOADING" ? (
        <Loading />
      ) : ( <div className="max-w-md w-full space-y-8">
      <div>
        <img className="pl-4 " src="\logo1.jpg" alt="Logo" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Giriş Yapın
        </h2>
      </div>
      <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="username" className="sr-only">
              Kullanıcı Adı
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Kullanıcı Adı"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Şifre
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Şifre"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleLogin}
          >
            Giriş Yap
          </button>
          <div className="text-xl pt-2">
            kayıt olmak ister misiniz ?
            <a
              onClick={() => navigate(`/register`)}
              href="#!"
              className="text-red-500 transition duration-150 ease-in-out hover:text-red-600 focus:text-red-600 active:text-red-700"
            >
              Register
            </a>
          </div>
        </div>
      </form>
    </div>)} </div>
     
    </div>
  );
};

export default Login;
