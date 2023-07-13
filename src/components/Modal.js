import React,{ useState } from "react";

const Modal = ({show, onClose, children}) =>{

    if(!show){
      return null;
    }
  
    return (
      <div className="model-overlay" onClick={onClose}>
        <div className="modal-dialog">
          <button className="model-close" onClick={onClose}>
            Close
          </button>
          {children}
        </div>
      </div>
    );
};

export default Modal;