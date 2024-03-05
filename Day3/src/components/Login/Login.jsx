import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import abc from '../../PublicImages/wedding.webp'
const Login = () => {
  const [loginType, setLoginType] = useState("user");

  const handleLoginAsUser = () => {
    setLoginType("user");
  };

  const handleLoginAsAdmin = () => {
    setLoginType("admin");
  };

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white flex rounded-2xl shadow-lg max-w-3xl p-8 md:p-12 items-center">
        <div className="md:w-1/2 md:pr-8">
          
          <h2 className="font-bold text-2xl text-[#391710]">Login</h2>
          

          <form className="flex flex-col gap-4 mt-6">
            <input className="p-3 rounded-xl border" type="email" name="email" placeholder="Email"/>
            <div className="relative">
              <input className="p-3 rounded-xl border w-full" type="password" name="password" placeholder="Password"/>
            </div>

            <div className="flex gap-4 mt-4">
              <Link to="/UserHome">
              <button className={`flex-1 p-3 rounded-xl border ${loginType === 'user' ? 'bg-[#391710] text-white' : 'bg-gray-200 text-gray-600'}`} onClick={handleLoginAsUser}>User</button>
              </Link>

              <Link to="/SideNavbar">
              <button className={`flex-1 p-3 rounded-xl border ${loginType === 'admin' ? 'bg-[#391710] text-white' : 'bg-gray-200 text-gray-600'}`} onClick={handleLoginAsAdmin}>Admin</button>
              </Link>
            </div>

   
          </form>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400"/>
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400"/>
          </div>

          <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
            <a href="#">Forgot your password?</a>
          </div>

          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p>Don't have an account?</p>
            <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300 hover:text-white"><Link to="/SignUp">Register</Link></button>
          </div>
        </div>

        <div className="md:w-1/2 hidden md:block">
          <img className="rounded-2xl" src={abc} alt="Wedding"/>
        </div>
      </div>
    </section>
  );
};

export default Login;
