import React, { useState } from "react";
import AccountInfo from "./account-info";
import Confirm from "./confirm";
import Message from "./message";
import PersonalInfo from "./personal-info";
import Stepper from "./stepper";

const Form = () => {
  const [step, setStep] = useState(1);

  const FormDisplay = () => {
    switch (step) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <AccountInfo />;
      case 3:
        return <Message />;
      default:
        return <Confirm />;
    }
  };

  return (
    <div className="mt-8">
      <Stepper step={step} />

      <div className="mt-16 p-6 bg-white shadow-xl rounded-lg">
        <h4 className="font-bold">step {step}</h4>

        {/* <PersonalInfo /> */}
        {FormDisplay()}

        <div className="flex p-2 mt-4">
          <button
            onClick={() => {
              if (step === 1) return;
              setStep((prev) => prev - 1);
            }}
            disabled={step === 1}
            className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-gray-200  
        bg-gray-100 
        text-gray-700 
        border duration-200 ease-in-out 
        border-gray-600 transition"
          >
            Previous
          </button>
          <div className="flex-auto flex flex-row-reverse">
            <button
              onClick={() => {
                if (step === 4) return;
                setStep((prev) => prev + 1);
              }}
              disabled={step === 4}
              className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-600  
        bg-teal-600 
        text-teal-100 
        border duration-200 ease-in-out 
        border-teal-600 transition"
            >
              Next
            </button>
            <button
              className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-200  
        bg-teal-100 
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition"
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
