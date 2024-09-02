import React from 'react';

const GuaranteeCard = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center p-6 text-center border border-transparent rounded-lg hover:border-gray-700 transition duration-300 ease-in-out">
      <div className="mb-4 text-4xl text-orange-400">{icon}</div>
      <h4 className="text-lg font-semibold text-white">{title}</h4>
    </div>
  );
};

export default GuaranteeCard;
