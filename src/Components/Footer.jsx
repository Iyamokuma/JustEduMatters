import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin,  } from 'lucide-react';
import logo from './images/JEM_logo 1.png'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Us Section */}
          <div>
            <h3 className="text-lg font-medium mb-6">Contact Us</h3>
            <div className="space-y-4">
              <p className="text-sm text-gray-300">
                Just Education Matters CIC,
                <br />
                Kemp House, 152-160 City Road,
                <br />
                London EC1V 2NX
              </p>
              <p className="text-sm text-gray-300">
                <a
                  href="tel:07936449834"
                  className="hover:text-white transition-colors"
                >
                  07936 449 834
                </a>
              </p>
              <p className="text-sm text-gray-300">
                <a
                  href="mailto:info@justeducationmatters.org"
                  className="hover:text-white transition-colors"
                >
                  info@justeducationmatters.org
                </a>
              </p>
              <p className="text-sm text-gray-300">
                <a
                  href="https://www.justeducationmatters.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  www.justeducationmatters.org
                </a>
              </p>
            </div>
          </div>

          {/* Policies Section */}
          <div>
            <h3 className="text-lg font-medium mb-6">Policies</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/health-and-safety"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Health and Safety
                </a>
              </li>
              <li>
                <a
                  href="/safeguarding-policy"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Safeguarding Policy
                </a>
              </li>
              <li>
                <a
                  href="/whistleblowing-policy"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Whistleblowing Policy
                </a>
              </li>
              <li>
                <a
                  href="/equality-and-diversity-policy"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Equality and Diversity Policy
                </a>
              </li>
              <li>
                <a
                  href="/data-protection-policy"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Data Protection Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Company Details Section */}
          <div>
            <h3 className="text-lg font-medium mb-6">Company Details</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-1">Company Name</h4>
                <p className="text-sm text-gray-300">Just Education Matters CIC</p>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1">Registered Address</h4>
                <p className="text-sm text-gray-300">
                  152-160 City Road, London,
                  <br />
                  United Kingdom, EC1V 2NX
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1">Company Number</h4>
                <p className="text-sm text-gray-300">12187084</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col space-y-2">
            <p className="text-sm text-gray-300">
              © 2025 Just Education Matters CIC. All rights reserved.
            </p>
            <p className="text-sm text-gray-300">
              Developed with ❤️ by <a href="https://timzdigital.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TimzDigital</a>
            </p>
          </div>       

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="text-gray-300 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="text-gray-300 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-gray-300 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="text-gray-300 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
