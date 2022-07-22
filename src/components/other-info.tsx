import React from "react";
import { IFormdata } from "./form";

interface IOtherInforForm {
  formData: IFormdata;
  setFormData: React.Dispatch<React.SetStateAction<IFormdata>>;
}

const OtherInfo: React.FC<IOtherInforForm> = ({ formData, setFormData }) => {
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Nationality..."
        value={formData.nationality}
        onChange={(e) => {
          setFormData({ ...formData, nationality: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Other..."
        value={formData.other}
        onChange={(e) => {
          setFormData({ ...formData, other: e.target.value });
        }}
      />
    </div>
  );
};

export default OtherInfo;
