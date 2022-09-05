import React from 'react'
import FormRow from '../../../components/FormRow'

const Setting = () => {
  return (
    <>
    <div className="bg-gray-200 min-h-screen pb-24 p-12">
 
     <div classNameName="container mx-auto max-w-3xl mt-8">


    <h1 className="text-2xl font-bold text-gray-700 px-6 md:px-0">Account Settings</h1>
    <ul className="flex border-b border-gray-300 text-sm font-medium text-gray-600 mt-3 px-6 md:px-0">
      <li className="mr-8 text-gray-900 border-b-2 border-gray-800"><a href="#_" className="py-4 inline-block">Profile Info</a></li>
      <li className="mr-8 hover:text-gray-900"><a href="#_" className="py-4 inline-block">Security</a></li>
      <li className="mr-8 hover:text-gray-900"><a href="#_" className="py-4 inline-block">Billing</a></li>
    </ul>
    <form action="{{ route('profile.save') }}" method="POST" enctype="multipart/form-data">
      {/* <!-- @csrf --> */}
      <div className="w-full bg-white rounded-lg mx-auto mt-8 flex overflow-hidden rounded-b-none">
        <div className="w-1/3 bg-gray-100 p-8 hidden md:inline-block">
          <h2 className="font-medium text-md text-gray-700 mb-4 tracking-wide">Profile Info</h2>
          <p className="text-xs text-gray-500">Update your basic profile information such as Email Address, Name, and Image.</p>
        </div>
        <div className="md:w-2/3 w-full">
          <div className="py-8 px-16">
            <label for="name" className="text-sm text-gray-600">Name</label>
            <FormRow />
          </div>
          <hr className="border-gray-200" />
          <div className="py-8 px-16">
            <label for="email" className="text-sm text-gray-600">Email Address</label>
            <FormRow />
          </div>
          <hr className="border-gray-200" />
          <div className="py-8 px-16 clearfix">
            <label for="photo" className="text-sm text-gray-600 w-full block">Photo</label>
            <img className="rounded-full w-16 h-16 border-4 mt-2 border-gray-200 float-left" id="photo" src="https://pbs.twimg.com/profile_images/1163965029063913472/ItoFLWys_400x400.jpg" alt="placeholder" />
            <div className="bg-gray-200 text-gray-500 text-xs mt-5 ml-3 font-bold px-4 py-2 rounded-lg float-left hover:bg-gray-300 hover:text-gray-600 relative overflow-hidden cursor-pointer">
              <input type="file" name="photo" onchange="loadFile(event)" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" /> Change Photo
            </div>
          </div>

        </div>

      </div>
      <div className="p-16 py-8 bg-gray-300 clearfix rounded-b-lg border-t border-gray-200">
        <p className="float-left text-xs text-gray-500 tracking-tight mt-2">Click on Save to update your Profile Info</p>
        <input type="submit" className="bg-indigo-500 text-white text-sm font-medium px-6 py-2 rounded float-right uppercase cursor-pointer" value="Save" />
      </div>
    </form>
  </div>
</div>
</>
  )
}

export default Setting