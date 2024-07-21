import React from "react";
import logo from "./res/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faLinkedin, faSquareTwitter,faInstagram,faSquareYoutube  } from '@fortawesome/free-brands-svg-icons'
import './styles/App.scss'
function Footer() {
  const facebook=<FontAwesomeIcon icon={faSquareFacebook} className="brands"/>
  const linkdin=<FontAwesomeIcon icon={faLinkedin} className="brands"/>
  const twitter=<FontAwesomeIcon icon={faSquareTwitter} className="brands"/>
  const instagram=<FontAwesomeIcon icon={faInstagram} className="brands" style={{color: "#ffffff",}} />
  const youtube=<FontAwesomeIcon icon={faSquareYoutube} className="brands" />
  return (
    <>
      <div className="Footer_Container">
        <div className="footer">
          <div className="footer_row1">
            <span id="footer_row1_logo">
              <img src={logo} alt="not" width={140} height={20} />
              <span className="space"></span>
            </span>
            <span id="footer_row1_logo2">
              <button>Schedule 1-on-1 Call Now</button>
              <h3>Speak with our Learning Advisor</h3>
            </span>
          </div>
          <div className="footer_row2">
            <div className="footer_row2_col1">
              <h2>Programs</h2>
              <span>
                <h2>Data Science & AI</h2>
              </span>
              <span>
                <h2>Product Management</h2>
              </span>
              <span>
                <h2>Business Analysis</h2>
              </span>
              <span>
                <h2>Digital Transformation</h2>
              </span>
              <span>
                <h2>Business Management</h2>
              </span>
              <span>
                <h2>Project Management</h2>
              </span>
              <span>
                <h2>Strategy & Leadership</h2>
              </span>
              <span>
                <h2>Senior Management</h2>
              </span>
              <span>
                <h2>Fintech</h2>
              </span>
            </div>
            <div className="footer_row2_col2">
              <h2>Contact Us</h2>
              <p>
                Email us (For Data Sceince Queries): admission@accredian.com
                <br />
                Email us (For Product Management Queries):pm@accredian.com{" "}
                <br />
                Data Science Admission Helpline:+91 9079653292(9 AM - 7 PM){" "}
                <br />
                Product Management Admission Helpline:+919625811095 <br />
                Enrolled Student Helpline:+91 7969322507 <br />
                Office Address: 4th Floor.250 Phase 4, Udyog Vihar, Sector 18,
                Gurugram, <br />
                Haryana 122015
              </p>
              <h2>Why Accredian</h2>
              <h2>Follow Us</h2>
              <span>{facebook} {linkdin} {twitter} {instagram} {youtube}</span>
            </div>
            <div className="footer_row2_col3">
              <h1>Accredian</h1>
              <h2>About</h2>
              <h2>Career</h2>
              <h2>Blog</h2>
              <h2>Admission Policy</h2>
              <h2>Referral Policy</h2>
              <h2>Privacy Policy</h2>
              <h2>Tearm of Service</h2>
              <h2>Mater FAQs</h2>
            </div>
          </div>
          <div className="footer_row1">
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
