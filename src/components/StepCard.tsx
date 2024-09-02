import React from 'react';

const StepCard = ({ stepNumber, title, description, icon }) => {
  return (
    <div className="relative p-8 text-left border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="absolute text-[150px] font-bold text-gray-100 -top-10 -left-6">
        {stepNumber}
      </div>
      <div className="relative z-10 flex flex-col items-start">
        <div className="mb-4">{icon}</div>
        <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;
