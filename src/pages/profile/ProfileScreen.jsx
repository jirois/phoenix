import React from "react";
import {  useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import userIcon from "../../assets/user.png"
import {FiLogOut} from 'react-icons/fi'


const ProfileScreen =() => {
  const { logoutUser, user } = useGlobalContext();
  const navigate = useNavigate();
  console.log(user)

  const onLogout = () => {
    logoutUser();
    navigate("/signin");
  }

  return (
    
    <div className="flex  flex-col mt-14">
      
      <div className="bg-white md:mx-auto shadow-xl p-6">
        <div className="border-b-1 pb-3">
          <h3 className="text-2xl font-bold mb-1">Profile</h3>
          <span className="text-sm text-gray-600">This is information will be displayed publicly so be careful what you share</span>
        </div>
        <div className="flex justify-between border-b-1 py-3">
          <div className="flex flex-col ">
            <span className="text-xs text-gray-500 block mb-1">Name</span>
            <span className="font-extra-thin text-sm">{user.name}</span>
          </div>
          <button className="text-blue-400 pt-2">update</button>
        </div>
        <div className="flex justify-between border-b-1 py-3">
          <div className="flex flex-col ">
            <span className="text-xs text-gray-500 block mb-1">Email</span>
            <span className="font-extra-thin text-sm">{user.email}</span>
          </div>
          <button className="text-blue-400 pt-2">update</button>
        </div>
        <div className="flex justify-between border-b-1 py-3">
          <div className="flex flex-col ">
            <span className="text-xs text-gray-500 block mb-1">Password</span>
            <span className="font-extra-thin text-sm">*******</span>
          </div>
          <button className="text-blue-400 pt-2">update</button>
        </div>
        <div className="flex justify-between  py-3">
          <div className="flex flex-col ">
            <span className="text-xs text-gray-500 block mb-1">Profile Image</span>
            <img className="w-10 h-10" src={userIcon} alt="img alt" />
          </div>
          <button className="text-blue-400 pt-2">update</button>
        </div>
      </div>
      <div className="mt-5 md:w-5/6 md:mx-auto">
        <div className="text-gray-500 flex justify-center py-2  text-xl">
          <FiLogOut className="pt-2 text-xl" />
          <button className="font-bold ml-2 hover:text-yellow-500"onClick={onLogout}>Log out</button>
        </div>
      </div>

     
     
    
    </div>
  );
  
}

export default ProfileScreen
