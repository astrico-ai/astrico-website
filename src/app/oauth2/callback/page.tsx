import React from 'react';

export default function OAuth2Callback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Authorization Complete
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            You can close this window and return to the application.
          </p>
        </div>
      </div>
    </div>
  );
} 