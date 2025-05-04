// src/pages/ReportPage.tsx
import { useState } from 'react';
import BribeForm from '../components/BribeReport';
import ReceiptGenerator from '../components/ReceiptGenerator';
import { BribeReport } from '../types';

export default function ReportPage() {
  const [generatedReport, setGeneratedReport] = useState<BribeReport | null>(null);

  return (
    <div className="mx-auto p-4 bg-gray-800 text-white h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6 text-center">Report Corruption</h1>
      {!generatedReport ? (
        <BribeForm onSuccess={setGeneratedReport} />
      ) : (
        <div className="space-y-4 flex flex-col justify-center items-center">
          <ReceiptGenerator report={generatedReport} />
          <button
            onClick={() => setGeneratedReport(null)}
            className="text-center px-4 bg-blue-600 text-white py-3 rounded-lg font-bold"
          >
            Report Another Incident
          </button>
        </div>
      )}
    </div>
  );
}