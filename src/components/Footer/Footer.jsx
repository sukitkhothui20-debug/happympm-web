import React from "react";
import "./footer.css";
import { FaTiktok, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = ({ language, t }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Left - Company Info */}
          <div className="footer-section footer-company">
            <h3 className="footer-logo">HAPPY MPM</h3>
            <p className="footer-company-name">Happy MPM Head Office</p>
            <p className="footer-address">
              3J/30 Noble House Phayathai Building, Phayathai Road, Thanon Phayathai Subistricts, Ratchathewi District, Bangkok 10400
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#">About Happy MPM</a></li>
              <li><a href="#">Join Our Business</a></li>
              <li><a href="#">News & Articles</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h4 className="footer-title">Support</h4>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Feedback</a></li>
              <li><a href="#">Branch Locations</a></li>
            </ul>
          </div>

          {/* Products */}
          <div className="footer-section">
            <h4 className="footer-title">Product</h4>
            <ul className="footer-links">
              <li><a href="#">Health</a></li>
              <li><a href="#">Health & Wellness Solutions</a></li>
              <li><a href="#">Beauty & Body Care</a></li>
              <li><a href="#">Supplement Set (CR)</a></li>
              <li><a href="#">Agriculture & Equipment</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="footer-section footer-social">
            <div className="social-icons-footer">
              <a href="#" className="social-icon-footer" title="TikTok">
                <FaTiktok size={24} />
              </a>
              <a href="#" className="social-icon-footer" title="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="social-icon-footer" title="YouTube">
                <FaYoutube size={24} />
              </a>
              <a href="#" className="social-icon-footer" title="Instagram">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <p className="footer-copyright">
            © 2025 Happy MPM Co., Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
