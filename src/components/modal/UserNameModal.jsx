import React from "react";
import { useGlobalContext } from "../../context";

const UserNameModal = () => {
  const {closeModal} = useGlobalContext()
  return (
    
  <div 
  className="fixed z-10 overflow-y-auto top-0 w-full left-0">
  <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div className="fixed inset-0 transition-opacity">
      <div className="absolute inset-0 bg-gray-900 opacity-75" />
    </div>
    <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
    <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div className="pt-4 pb-2 text-center">
        <h2 className="font-bold text-2xl text-black">Update your name</h2>
      </div>
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <label>First Name *</label>
        <input type="text" className="w-full bg-gray-100 p-2 mt-2 mb-3" />
        <label>Last Name *</label>
        <input type="text" className="w-full bg-gray-100 p-2 mt-2 mb-3" />
      </div>
      <div className="bg-gray-200 px-4 py-3 text-right">
        <button 
        type="button" className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onClick={() => closeModal('name')}><i className="fas fa-times"></i> Cancel</button>
        <button type="button" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"><i className="fas fa-plus"></i> Update</button>
      </div>
    </div>
  </div>
</div>
  );
};

export default UserNameModal;
