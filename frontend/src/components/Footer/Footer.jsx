import React from "react";

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-xl font-bold mb-4">ShaktiSpace</h3>
          <p className="text-sm">
            Empowering women entrepreneurs through AI-driven financial inclusion.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Resources</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm">support@shaktispace.com</p>
          <p className="text-sm">+91 98765 43210</p>
        </div>
      </div>

      <div className="text-center mt-8 text-sm">
        © 2026 ShaktiSpace. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
