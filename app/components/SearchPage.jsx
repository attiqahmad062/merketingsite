"use client"


const SelectTag = () => {

  return (
    <div className="space-y-1  md:gap-6 md:w-full p-2 sm:flex md:justify-evenly   mt-8">
      
      <select
        
        className="w-full px-4 py-2 text-xl border border-blue-300 rounded-md"
      >
        <option value="">Interested In </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <select
        
        className="w-full px-4 py-2 text-xl border border-blue-300  rounded-md focus:outline-none"
      >
        <option value="">Chose Provider</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <select
       
        className="w-full px-4 py-2 text-xl border border-blue-300  rounded-md focus:outline-none"
      >
        <option value="">Chose State</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <select
      
        className="w-full px-4 py-2 text-xl border border-blue-300  rounded-md focus:outline-none"
      >
        <option value="">Chose Language</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <select
      
      className="w-full px-4 py-2 text-xl border border-blue-300  rounded-md focus:outline-none"
    >
      <option value="">Chose Gender</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
      <button className="bg-blue-400 text-white cursor-pointer rounded-md w-full px-2 py-2 mt-2 md:mt-0">Search</button>
    </div>
  );
};

export default SelectTag;
