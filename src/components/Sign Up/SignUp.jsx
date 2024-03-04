import React, { useState } from 'react';
import img from '../../PublicImages/wedding.webp'
const SignUp = () => {
  const [userType, setUserType] = useState("user");

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  return (
    <section className="bg-gray-150 min-h-screen flex items-center justify-center">
      <div className="bg-gray-50 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#391710] mb-8">Sign Up</h2>

          <form className="flex flex-col gap-6">
            <input className="p-3 rounded-xl border bg-white" type="text" name="name" placeholder="Name" />
            <input className="p-3 rounded-xl border bg-white" type="email" name="email" placeholder="Email" />
    
            <div className="relative">
              <input className="p-3 rounded-xl border w-full bg-white" type="password" name="password" placeholder="Password" />
              <input className="p-3 rounded-xl border w-full bg-white mt-4" type="password" name="confirmPassword" placeholder="Confirm Password" />
            </div>

            <div className="flex gap-4">
              <label className="flex items-center">
                <input type="radio" name="userType" value="user" checked={userType === "user"} onChange={handleUserTypeChange} />
                <span className="ml-2">User</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="userType" value="admin" checked={userType === "admin"} onChange={handleUserTypeChange} />
                <span className="ml-2">Admin</span>
              </label>
            </div>

            <button className="bg-[#391710] rounded-xl text-white py-3 hover:scale-105 duration-300 mt-6">Sign Up</button>
          </form>
        </div>

        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src={img} alt="Wedding" />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
