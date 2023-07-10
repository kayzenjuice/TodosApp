"use client";

import { useRouter } from "next/navigation";

function Modal({ params }) {
  const router = useRouter();

  function handleContinue() {
    window.location.reload();
  }

  function handleClose() {
    router.back();
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white rounded-lg text-center shadow-xl">
        <div className="px-4 py-6">
          <h3 className="text-lg font-medium text-gray-900">Intercept Modal</h3>
          <p className="mt-2 text-sm text-gray-500">
            Intercepting todo ID : {params.id}
          </p>
        </div>
        <div className="flex justify-center p-5 gap-5">
          <button
            className="bg-blue-500 text-white px-2 rounded-lg"
            onClick={handleClose}
          >
            Close
          </button>
          <button
            className="bg-blue-500 text-white px-2 rounded-lg"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
