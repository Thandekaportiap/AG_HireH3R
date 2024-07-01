import React, { useState } from 'react';

const VerificationPage = () => {
  const [code, setCode] = useState('');
  const [verificationReceived, setVerificationReceived] = useState(false);
  const [verificationEmail, setVerificationEmail] = useState('');

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleCodeDelete = () => {
    setCode('');
  };

  const handleVerificationReceived = (e) => {
    setVerificationReceived(e.target.checked);
  };

  const handleVerificationEmail = (e) => {
    setVerificationEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform verification logic here
    console.log('Verification code:', code);
    console.log('Verification received:', verificationReceived);
    console.log('Verification email:', verificationEmail);

    // Reset the form
    setCode('');
    setVerificationReceived(false);
    setVerificationEmail('');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white shadow-md rounded px-8 py-6 w-1/2" onSubmit={handleSubmit}>
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2 text-center">Please verify your account</h2>
          <p>Verification code sent via email</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="codeInput">
            Code Input (6 digits)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="codeInput"
            type="text"
            maxLength={6}
            value={code}
            onChange={handleCodeChange}
          />
        </div>
        <div className="mb-4 flex items-center">
          <input
            className="mr-2 leading-tight"
            type="checkbox"
            checked={verificationReceived}
            onChange={handleVerificationReceived}
            id="verificationReceivedCheckbox"
          />
          <label className="text-sm" htmlFor="verificationReceivedCheckbox">
            No verification received
          </label>
        </div>
        
        <div className="flex items-center justify-between">
          <button
            className="bg-fuchsia-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Verify
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleCodeDelete}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default VerificationPage;