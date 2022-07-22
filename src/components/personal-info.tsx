import React from "react";
import { IFormdata } from "./form";

interface IPersonalInfoForm {
  formData: IFormdata;
  setFormData: React.Dispatch<React.SetStateAction<IFormdata>>;
}

const PersonalInfo: React.FC<IPersonalInfoForm> = ({
  formData,
  setFormData,
}) => {
  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="First Name..."
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Last Name..."
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Username..."
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
    </div>
  );
};

export default PersonalInfo;
