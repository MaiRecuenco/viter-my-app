const ModalWrapper = ({ children, className, handleClose }) => {
  return (
    <div
      className={`modal__wrapper fixed top-0 left-0 h-full w-full flex justify-end z-30`}
    >
      <div
        className={`backdrop bg-black opacity-30 h-full w-full absolute top-0 left-0 z-20`}
        onClick={handleClose}
      ></div>
      <div
        className={`modal-wrapper transition-all ease-in-out transform duration-200 z-40 ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
