const ReceiptGenerator = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Bribe Report Receipt</h2>
      <div className="bg-white text-black p-4 rounded mb-6">
        {/* Placeholder data */}
        <p>Department: Traffic Police</p>
        <p>Amount: 5,000 PKR</p>
      </div>
      <div className="flex gap-4">
        <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg">
          Download PDF (Coming Soon)
        </button>
        <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg">
          Share (Coming Soon)
        </button>
      </div>
    </div>
  );
};