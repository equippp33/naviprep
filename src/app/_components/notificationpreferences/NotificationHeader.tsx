import { ArrowLeft, HelpCircle } from 'lucide-react'
import React from 'react'
import { RiNotification2Fill } from 'react-icons/ri'

const NotificationHeader = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-8n w-full p-4">
      {/* Left side */}
      <div className="flex items-center">
        <button className="flex items-center text-gray-600 hover:text-gray-800 mr-6">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>
        
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        
        <button className="p-2 text-gray-400 hover:text-gray-600">
          <HelpCircle className="w-6 h-6" />
        </button>
        <button className="p-2 text-gray-400 hover:text-gray-600">
          <RiNotification2Fill className="w-6 h-6" />
        </button>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 flex items-center justify-center">
          <img 
            src="/avatar.svg" 
            alt="User"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default NotificationHeader
