"use client";

import React from "react";

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-content">
        <h3 className="modal-title">{title}</h3>
        <div className="text-gray-600 mb-6 overflow-y-auto max-h-[70vh] leading-relaxed text-justify">
          {content}
        </div>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="modal-close"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;