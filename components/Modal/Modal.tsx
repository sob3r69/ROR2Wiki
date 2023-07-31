import React, { SetStateAction } from 'react';
import ReactDOM from 'react-dom';
import style from './Modal.module.css';

type ModalProps = {
  itemTitle: string;
  modalState: boolean;
  changeModalState: React.Dispatch<SetStateAction<boolean>>;
};

const Modal = ({ itemTitle, modalState, changeModalState }: ModalProps) => {
  return (
    <div
      className={style.modal_container}
      style={{ visibility: modalState ? 'visible' : 'hidden' }}
      onClick={() => changeModalState(false)}
    >
      <div className={style.modal_content}>{itemTitle}</div>
    </div>
  );
};

export default Modal;
