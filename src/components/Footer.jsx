import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Company</h2>
            <ul>
              <li>About Us</li>
              <li>Our Team</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Services</h2>
            <ul>
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Resources</h2>
            <ul>
              <li>Blog</li>
              <li>FAQs</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <ul>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
