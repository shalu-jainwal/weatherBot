import React from "react";

export default function Modal({ isOpen, onClose, title, children, onConfirm }) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        onClick={onClose}
      />
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div
          className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-xl font-semibold mb-4">{title}</h3>
          <div className="mb-6">{children}</div>
          <div className="flex justify-end gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
