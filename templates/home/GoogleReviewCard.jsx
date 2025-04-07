import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function GoogleReviewCard() {
    return (
      <div className="max-w-md p-4 bg-white rounded-xl shadow-md border border-gray-200 mb-4">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1">
            <span className="text-lg font-medium text-gray-900">5</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar className='text-[#ffbc00] text-sm' />
              ))}
            </div>
          </div>
          <span className="text-gray-500 text-xs">Nov 13, 2024</span>
        </div>
  
        {/* Review Content */}
        <p className="text-gray-700 mt-2 text-sm">
          Guiseppe took the time to get to know me and what makes me tick. Rather
          than just throwing random opportunities at me, he sent relevant business
          that ...
          <span className="text-blue-600 cursor-pointer"> More</span>
        </p>
  
        {/* Profile Section */}
        <div className="flex items-center mt-4">
          <div className="w-5 h-5 bg-green-600 text-white flex items-center justify-center text-xs rounded-full font-semibold">
            JB
          </div>
          <span className="ml-2 text-sm text-gray-500">Jon Blinderman</span>
          <div className="ml-auto">
          <FcGoogle />
          </div>
        </div>
      </div>
    );
  }
  