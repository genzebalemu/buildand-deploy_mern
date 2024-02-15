import React from 'react';
import logoimage from '../../img/logo.jpg'

const Login = () => {
  return (
    <div>
        <img  src={logoimage} alt="Woman's Face" />
      <form className="w-full max-w-md p-4 ">
        <label className="block mb-2 font-semibold text-lg">Username:</label>
        <input type="text" className="w-full mb-4 px-4 py-2 border border-purple-200 rounded focus:outline-none" />
        
        <label className="block mb-2 font-semibold text-lg hover:underline">Email:</label>
        <input type="text" className="w-full mb-4 px-4 py-2 border border-gray-400 rounded focus:outline-none" />
        
        <label className="block mb-2 font-semibold text-lg">Password:</label>
        <input type="password" className="w-full mb-4 px-4 py-2 border border-gray-400 rounded focus:outline-none" />
        
        <button type='submit' className="w-full px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
};

export default Login;


