import React from 'react';

const Profile = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">My Profile</h1>
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/3">
            <img src="https://via.placeholder.com/150" alt="Profile" className="rounded-lg mb-4" />
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Personal Information</h2>
              <p className="text-sm text-gray-600 mb-1">Name: John Doe</p>
              <p className="text-sm text-gray-600 mb-1">Email: johndoe@example.com</p>
              <p className="text-sm text-gray-600 mb-1">Address: 123 Main St, City, Country</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Account Settings</h2>
              <button className="text-white bg-orange-950 border-0 py-2 px-8 focus:outline-none hover:bg-orange-950 rounded text-lg mb-2">Edit Profile</button>
              <button className="text-white bg-orange-950 border-0 py-2 px-8 focus:outline-none hover:bg-orange-950 rounded text-lg">Change Password</button>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Order History</h2>
            <div className="border-t border-gray-200">
              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <div>
                  <p className="text-gray-700">#123456</p>
                  <p className="text-sm text-gray-600">Date: Jan 1, 2024</p>
                </div>
                <div>
                  <p className="text-gray-700">$99.99</p>
                  <p className="text-sm text-gray-600">Status: Delivered</p>
                </div>
                <button className="text-sm text-indigo-600 hover:text-indigo-700">View Details</button>
              </div>
              {/* More orders can be added here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
