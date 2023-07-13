import React,{ useState } from "react";

const Modal = ({show, onClose, children}) =>{

    if(!show){
      return null;
    }
  
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-dialog">
          <button className="modal-close" onClick={onClose}>
            Close
          </button>
          {children}
        </div>
      </div>
    );
};

export default Modal;