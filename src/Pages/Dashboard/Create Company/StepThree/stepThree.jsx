import React from 'react';

const StepThree = ({ register, errors }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 3: Business Details</h2>
      
      <div className="mb-4">
        <label className="block mb-2" htmlFor="businessType">Business Type</label>
        <select
          id="businessType"
          {...register('businessType', { required: 'Business type is required' })}
          className="w-full border rounded-lg p-2"
        >
          <option value="">Select business type</option>
          <option value="sole_proprietorship">Sole Proprietorship</option>
          <option value="partnership">Partnership</option>
          <option value="corporation">Corporation</option>
          <option value="llc">LLC</option>
        </select>
        {errors.businessType && <p className="text-red-500">{errors.businessType.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="employeeCount">Number of Employees</label>
        <input
          type="number"
          id="employeeCount"
          {...register('employeeCount', { required: 'Employee count is required', min: 1 })}
          className="w-full border rounded-lg p-2"
        />
        {errors.employeeCount && <p className="text-red-500">{errors.employeeCount.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="annualRevenue">Annual Revenue</label>
        <input
          type="number"
          id="annualRevenue"
          {...register('annualRevenue', { required: 'Annual revenue is required', min: 0 })}
          className="w-full border rounded-lg p-2"
        />
        {errors.annualRevenue && <p className="text-red-500">{errors.annualRevenue.message}</p>}
      </div>
    </div>
  );
};
export default StepThree