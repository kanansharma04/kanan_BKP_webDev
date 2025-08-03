import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col lg={4} md={6} sm={12} className="mb-4">
            <h5 className="fw-bold mb-3 text-light">Hope Foundation</h5>
            <p className="text-light mb-3">
              Dedicated to creating positive change in communities worldwide through 
              volunteer work, education, and sustainable development programs.
            </p>
            <div className="social-links d-flex justify-content-center justify-content-lg-start">
              <a href="#" className="text-white me-3" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white me-3" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-white me-3" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-white" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
            </div>
          </Col>
          
          <Col lg={4} md={6} sm={12} className="mb-4">
            <h5 className="fw-bold mb-3 text-light">Contact Info</h5>
            <div className="contact-info">
              <p className="mb-2 text-center text-lg-start">
                <FaMapMarkerAlt className="me-2" />
                123 Hope Street, Community City, CC 12345
              </p>
              <p className="mb-2 text-center text-lg-start">
                <FaPhone className="me-2" />
                <a href="tel:+1234567890" className="text-white text-decoration-none">
                  +1 (234) 567-8900
                </a>
              </p>
              <p className="mb-2 text-center text-lg-start">
                <FaEnvelope className="me-2" />
                <a href="mailto:info@hopefoundation.org" className="text-white text-decoration-none">
                  info@hopefoundation.org
                </a>
              </p>
            </div>
          </Col>
          
          <Col lg={4} md={12} sm={12} className="mb-4">
            <h5 className="fw-bold mb-3 text-light text-center text-lg-start">Quick Links</h5>
            <ul className="list-unstyled text-center text-lg-start">
              <li className="mb-2">
                <a href="#hero" className="text-light text-decoration-none">Home</a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-light text-decoration-none">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#volunteer" className="text-light text-decoration-none">Volunteer</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Donate</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">News & Events</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Contact</a>
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="my-4 " />

        <Row className="align-items-center ">
          <Col md={6} className="text-center text-md-start text-light">
            <p className="mb-0">
              &copy; {currentYear} Hope Foundation. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="mb-0">
              Made with <FaHeart className="text-danger" /> for our community
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
