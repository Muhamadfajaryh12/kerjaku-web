import { createContext, useContext, useState } from "react";

const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState(null);
  const openModal = (contentValue) => {
    setContent(contentValue);
    setOpen(true);
  };

  const closeModal = () => {
    setContent(null);
    setOpen(false);
  };

  return (
    <ModalContext.Provider value={{ open, content, openModal, closeModal }}>
      {children}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center "
          onClick={closeModal}
        >
          <div className="bg-white my-12 p-4 rounded-lg shadow-xl overflow-y-auto max-h-screen">
            {content}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
