// const Footer = () => {
//   const currYear = new Date().getFullYear();
//   return (
//     <footer className="footer">
//       <p>
//         Copyright &copy; {currYear}
//       </p>
//     </footer>
//   );
// };

// export default Footer;
const Footer = () => {
  const currYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Delivering the best dining experience with a wide selection of restaurants at your fingertips.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright &copy; {currYear} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
