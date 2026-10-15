import React, { createContext, useContext, useState } from 'react';

const DownloadModalContext = createContext();

export const useDownloadModal = () => {
  const context = useContext(DownloadModalContext);
  if (!context) {
    throw new Error('useDownloadModal must be used within a DownloadModalProvider');
  }
  return context;
};

export const DownloadModalProvider = ({ children }) => {
  const [downloadModal, setDownloadModal] = useState({ 
    isOpen: false, 
    platform: '' 
  });

  const openModal = (platform = 'Android') => {
    const validPlatform = (typeof platform === 'string' && platform.trim()) ? platform : 'Android';
    setDownloadModal({ isOpen: true, platform: validPlatform });
  };

  const closeModal = () => {
    setDownloadModal({ isOpen: false, platform: '' });
  };

  const value = {
    downloadModal,
    openModal,
    closeModal
  };

  return (
    <DownloadModalContext.Provider value={value}>
      {children}
    </DownloadModalContext.Provider>
  );
};