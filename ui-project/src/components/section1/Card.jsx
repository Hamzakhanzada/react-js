import React from 'react'

const Card = (props) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
         <div className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <img
          className="w-full h-48 object-cover"
          src={props.img}
          alt="User"
        />
        <div className="p-5">
          <h2 className="text-xl font-semibold text-gray-800">{props.name}</h2>
          <p className="text-sm text-gray-500">{props.role}</p>
          <p className="mt-3 text-gray-600 text-sm">
            {props.des}
          </p>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-colors">
            View Profile
          </button>
        </div>
      </div>
    </div>
    
   
  )
}

export default Card
