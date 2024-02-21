
// import { Link } from 'react-router-dom';
import "../assets/css/Footer.css";
import "../assets/css/Footer.css"

function Footer() {
  return (
    <div>
      <section> </section>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>Comp<span>logo</span></h3>
          <p className="footer-links">
            <a href="#" className="link-1">Home</a>
            <a href="#">Blog</a>
            <a href="#">About</a>
            <a href="#">Faq</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </p>
          <p className="footer-company-name">GiftWonders © 2024</p>
        </div>
        <div className="footer-center">
          <div>
            <i className="fas fa-map-marker"></i>
            <p><span></span> Solana Beach, California</p>
          </div>
          <div>
            <i className="fas fa-phone"></i>
            <p>+1.555.555.5555</p>
          </div>
          <div>
            <i className="fas fa-envelope"></i>
            <p><a href="mailto:support@company.com">support@company.com</a></p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>
          <div className="footer-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;