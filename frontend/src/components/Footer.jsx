import {FaFacebook,FaLinkedin,FaInstagram,FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <footer class="blog__footer">
        <div class="container">
          <div class="footer__content ">
            <p>Find us on :</p>
            <div className="footer-products">
            <a href="#"><FaFacebook/></a>
            <a href="#"><FaInstagram/></a>
            <a href="#"><FaLinkedin/></a>
            <a href="#"><FaTwitter/></a>
            </div>
          </div>
          

        </div>
        <p>Copyright® of Japheth Cheseret</p>
      </footer>
    </div>
  )
}

export default Footer