import React from "react";
import { IFormdata } from "./form";

interface ISignupForm {
  formData: IFormdata;
  setFormData: React.Dispatch<React.SetStateAction<IFormdata>>;
}

const SignupInfo: React.FC<ISignupForm> = ({ formData, setFormData }) => {
  console.log(formData);
  return (
    <div className="sign-up-container">
      <input
        type="text"
        placeholder="Email..."
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Password..."
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Confirm Password..."
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      />
    </div>
  );
};

export default SignupInfo;
