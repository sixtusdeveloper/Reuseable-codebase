// import React from 'react';

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-aliceblue w-full mx-auto py-3 text-center">
      <div className="flex justify-center items-center py-4">
        <a className="social-link" href="https://www.facebook.com/sixtusushrey" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook text-gray-700 m-3 text-lg"></i>
        </a>
        <a className="social-link" href="https://www.instagram.com/sixtusushrey" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram text-gray-700 m-3 text-lg"></i>
        </a>
        <a className="social-link" href="https://twitter.com/SixtusUshahemba" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter text-gray-700 m-3 text-lg"></i>
        </a>
        <a className="social-link" href="https://github.com/Sixtusdeveloper/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github text-gray-700 m-3 text-lg"></i>
        </a>
        <a className="social-link" href="https://www.linkedin.com/in/sixtusushrey" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin text-gray-700 m-3 text-lg"></i>
        </a>
        <a className="social-link" href="https://www.pinterest.com/sixtusushrey" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-pinterest text-gray-700 m-3 text-lg"></i>
        </a>
      </div>
      <div className="text-center py-4 text-gray-600 text-sm">
        <div className="flex-copyright">
          Copyright&copy; - 2024 Created By&nbsp;
          <span className="text-green-500">Sixtusdev</span>&nbsp;| &nbsp;All Rights Reserved | Terms & Policy
        </div>
      </div>
    </footer>
  );
}

export default Footer;
