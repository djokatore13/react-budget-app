import React from 'react';

const LoadingPage = () => (
  <div className="loader">
    <p className="loader__text">Loading...</p>
    <img src="/images/loader.gif" alt="Loader Icon" className="loader__img"/>
  </div>
);

export default LoadingPage;