import React, { useState } from "react";
import {
  SafetyOutlined,
  MoneyCollectOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { Department, BribeReport, BribeFormProps } from "../types";
import ReceiptGenerator from "./ReceiptGenerator";


const departments: Department[] = [
  "Traffic Police",
  "Electricity Department",
  "Water & Sanitation",
  "Tax Office",
  "Land Registry",
  "Other",
];

const BribeForm = ({onSuccess}: BribeFormProps) => {
  const [locationInput, setLocationInput] = useState("");

  const [formData, setFormData] = useState<BribeReport>({
    department: "Traffic Police",
    amount: 0,
    location: null,
    submitted: false,
  });

  const [showReceipt, setShowReceipt] = useState(false);

  const generateReportId = () => {
    return "BR-" + Math.random().toString(36).substring(2, 9).toUpperCase();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const reportWithId = {
      ...formData,
      reportId: generateReportId(),
      timestamp: new Date(),
      submitted: true,
    };
    setFormData(reportWithId);
    
    // Save to localStorage
    const reports = JSON.parse(localStorage.getItem("bribeReports") || "[]");
    localStorage.setItem(
      "bribeReports",
      JSON.stringify([...reports, reportWithId])
    );
    onSuccess?.(reportWithId);
    setShowReceipt(true);
  };

  const handleNewReport = () => {
    setFormData({
      department: "Traffic Police",
      amount: 0,
      location: null,
      submitted: false,
    });
    setShowReceipt(false);
  };

  const handleDepartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      department: e.target.value as Department,
    });
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      amount: parseInt(e.target.value),
    });
  };

  const handleLocationChange = (address: string) => {
    // Mock geocoding - replace with real API call
    setLocationInput(address);

    if (!address) {
      setFormData({ ...formData, location: null });
      return;
    }

    setFormData({
      ...formData,
      location: {
        lat: 24.8607 + Math.random() * 0.1,
        lng: 67.0011 + Math.random() * 0.1,
      },
    });
  };

  return (
    <div className="max-w-md mx-auto bg-gray-900 text-gray-100 rounded-xl shadow-2xl overflow-hidden p-6">
      {showReceipt ? (
        <div className="space-y-6">
          <ReceiptGenerator report={formData} />
          <button
            onClick={handleNewReport}
            className="w-full py-3 px-4 rounded-lg font-bold bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Report Another Incident
          </button>
        </div>
      ) : (
        <>
          {/* Header */}
          <div className="text-center mb-6">
            <SafetyOutlined className="text-green-500 text-3xl mb-2 mx-auto" />
            <h3 className="text-xl font-bold">Report Corruption Anonymously</h3>
            <p className="text-gray-400">Your identity remains protected</p>
          </div>

          {formData.submitted ? (
            <div className="bg-green-900 text-green-100 p-4 rounded-lg mb-6 flex items-start">
              <span className="mr-2">✓</span>
              <div>
                <p className="font-bold">Report Submitted!</p>
                <p className="text-sm">Thank you for fighting corruption.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Department Select */}
              <div>
                <label className="block text-gray-400 mb-2">
                  <EnvironmentOutlined className="mr-2" />
                  Where did this happen?
                </label>
                <select
                  value={formData.department}
                  onChange={handleDepartmentChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>

              {/* Amount Slider */}
              <div>
                <label className="block text-gray-400 mb-2">
                  <MoneyCollectOutlined className="mr-2" />
                  Amount Demanded (PKR)
                </label>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <input
                    type="range"
                    min="0"
                    max="20000"
                    step="500"
                    value={formData.amount}
                    onChange={handleAmountChange}
                    className="w-full accent-red-500"
                  />
                  <div className="text-center text-red-500 font-bold text-lg mt-2">
                    {formData.amount.toLocaleString()} PKR
                  </div>
                </div>
              </div>

              {/* Location Input */}
              <div>
                <label>Location</label>
                <input
                  type="text"
                  value={locationInput}
                  onChange={(e) => handleLocationChange(e.target.value)}
                  placeholder="Enter address"
                />
                {formData.location && (
                  <span className="text-xs">
                    Mapped to: {formData.location.lat.toFixed(4)},{" "}
                    {formData.location.lng.toFixed(4)}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!formData.department}
                className={`w-full py-3 px-4 rounded-lg font-bold ${
                  formData.department
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-gray-700 cursor-not-allowed"
                } transition-colors`}
              >
                Submit Anonymously
              </button>
            </form>
          )}

          {/* Privacy Note */}
          <p className="text-center text-gray-500 text-xs mt-6">
            No personal data is collected or stored.
          </p>
        </>
      )}
    </div>
  );
};

export default BribeForm;