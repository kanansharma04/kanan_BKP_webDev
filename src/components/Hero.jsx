import { Container, Row, Col, Button } from 'react-bootstrap'
import { FaHeart, FaHandsHelping, FaArrowDown, FaStar } from 'react-icons/fa'

const Hero = ({ scrollToSection }) => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay">
        <Container className="hero-content">
          <Row className="align-items-center min-vh-100">
            <Col xs={12} lg={10} xl={8} className="mx-auto text-center text-white">
              <div className="hero-text animate-fade-in">
                <div className="mb-4 position-relative">
                  <div 
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
                    style={{ 
                      width: 'clamp(80px, 15vw, 120px)', 
                      height: 'clamp(80px, 15vw, 120px)', 
                      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                      boxShadow: '0 20px 60px rgba(99, 102, 241, 0.3)'
                    }}
                  >
                    <FaHandsHelping size={'clamp(30, 5vw, 50)'} color="white" />
                  </div>
                  <FaStar className="position-absolute floating d-none d-md-block" 
                         style={{ top: '-20px', right: '40%', color: '#fbbf24' }} 
                         size={20} />
                  <FaStar className="position-absolute floating d-none d-md-block" 
                         style={{ bottom: '-10px', left: '35%', color: '#06b6d4' }} 
                         size={16} />
                </div>
                
                <h1 className="fw-bold mb-4 text-shadow" style={{ fontSize: 'clamp(1.5rem, 5vw, 3.5rem)' }}>
                  Together, We Can Make a
                  <span className="d-block text-gradient-secondary">
                    Difference
                  </span>
                </h1>
                
                <p className="lead mb-4 text-shadow" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
                  Join our mission to create positive change in communities worldwide. 
                  <span className="d-block mt-2 fw-light">
                    Every act of kindness matters, every volunteer counts.
                  </span>
                </p>
                
                <div className="d-flex justify-content-center align-items-center mb-5 flex-wrap gap-2">
                  <div className="badge bg-light text-dark px-3 py-2 rounded-pill" style={{ fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)' }}>
                    <FaHeart className="me-2 text-danger" size={14} />
                    Empowering Communities
                  </div>
                  <div className="badge bg-light text-dark px-3 py-2 rounded-pill" style={{ fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)' }}>
                    <FaStar className="me-2 text-warning" size={14} />
                    Building Hope
                  </div>
                  <div className="badge bg-light text-dark px-3 py-2 rounded-pill" style={{ fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)' }}>
                    <FaHandsHelping className="me-2 text-success" size={14} />
                    Creating Impact
                  </div>
                </div>
                
                <div className="hero-buttons d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="btn-enhanced px-4 py-3"
                    style={{ minWidth: '200px', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}
                    onClick={() => scrollToSection('volunteer')}
                  >
                    <FaHandsHelping className="me-2" />
                    Join as Volunteer
                  </Button>
                  <Button 
                    variant="outline-light" 
                    size="lg" 
                    className="btn-enhanced px-4 py-3"
                    style={{ minWidth: '200px', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}
                    onClick={() => scrollToSection('about')}
                  >
                    Learn More About Us
                  </Button>
                </div>
              </div>
              
              <div className="scroll-indicator mt-5">
                <FaArrowDown 
                  className="bounce" 
                  size={28} 
                  onClick={() => scrollToSection('about')}
                  style={{ 
                    cursor: 'pointer', 
                    opacity: 0.9,
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Hero
