import React, { useState } from 'react';
// import Footer from '@/components/Footer';

const UserRegistration: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., register user with Firebase)
    console.log('Form submitted:', { name, email, password, confirmPassword });
  };

  return (
    <section className="bg-gradient-to-r from-primary-color-dark to-secondary-color min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center gap-10">
          <div className="w-full md:w-1/2">
            <div className="text-center my-12">
              <img src="./assets/sixtus-logo.png" alt="Logo" className="w-30" />
            </div>
            <div className="bg-white shadow-lg rounded-lg px-8 py-14">
              <form className="form" id="signupForm" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold text-primary-color mb-6">Create Account</h1>
                <div className="form-message form-message-error"></div>
                <div className="mb-4">
                  <input
                    type="text"
                    className="input-item block bg-aliceblue border-2 border-gray-300 rounded-md p-3 outline-none w-full transition duration-200"
                    id="name"
                    autoFocus
                    autoComplete="on"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <span id="nameError" className="text-red-500 text-sm mt-1"></span>
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    className="input-item block bg-aliceblue border-2 border-gray-300 rounded-md p-3 outline-none w-full transition duration-200"
                    id="email"
                    autoComplete="on"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <span id="emailError" className="text-red-500 text-sm mt-1"></span>
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    className="input-item block bg-aliceblue border-2 border-gray-300 rounded-md p-3 outline-none w-full transition duration-200"
                    id="password"
                    autoComplete="on"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <span id="passwordError" className="text-red-500 text-sm mt-1"></span>
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    className="input-item block bg-aliceblue border-2 border-gray-300 rounded-md p-3 outline-none w-full transition duration-200"
                    id="confirmPassword"
                    autoComplete="on"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <span id="confirmPasswordError" className="text-red-500 text-sm mt-1"></span>
                </div>
                <button className="bg-primary-color text-white font-bold text-lg cursor-pointer w-full py-4 px-8 rounded transition duration-200 my-4 hover:bg-primary-color-dark active:scale-98" type="submit">Sign up</button>
                <p className="text-gray-600 text-center">
                  Already have an Account? <a href="#" className="text-secondary-color hover:underline">Login in</a>
                </p>
              </form>
            </div>
          </div>
          <div className="w-0 md:w-1/2">
            <div className="flex justify-center items-center w-full">
              <img src="./assets/apple-laptop.png" width="450" height="300" alt="Laptop Image" className="mx-auto my-10" />
            </div>
          </div>
        </div>
      </div>
      {/* Footer section */}
      {/* <Footer /> */}
    </section>
  );
};

export default UserRegistration;
