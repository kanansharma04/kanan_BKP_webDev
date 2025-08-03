import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { FaSun, FaMoon, FaBars } from 'react-icons/fa'

const Navigation = ({ scrollToSection, darkMode, toggleDarkMode }) => {
  return (
    <Navbar 
      bg={darkMode ? 'dark' : 'light'} 
      variant={darkMode ? 'dark' : 'light'} 
      expand="lg" 
      fixed="top" 
      className="shadow-sm"
      data-bs-theme={darkMode ? 'dark' : 'light'}
    >
      <Container>
        <Navbar.Brand 
          href="#" 
          className="fw-bold"
          style={{ 
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('hero')
          }}
        >
          Hope Foundation
        </Navbar.Brand>
        
        <div className="d-flex align-items-center order-lg-last">
          <Button
            variant={darkMode ? 'outline-light' : 'outline-dark'}
            size="sm"
            onClick={toggleDarkMode}
            className="me-2 border-2"
            aria-label="Toggle dark mode"
            style={{ 
              borderRadius: '50px',
              padding: '8px 12px',
              transition: 'all 0.3s ease'
            }}
          >
            {darkMode ? (
              <FaSun className="text-warning" size={16} />
            ) : (
              <FaMoon className="text-primary" size={16} />
            )}
          </Button>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FaBars />
          </Navbar.Toggle>
        </div>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link 
              href="#"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('hero')
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              href="#"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('about')
              }}
            >
              About Us
            </Nav.Link>
            <Nav.Link 
              href="#"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('volunteer')
              }}
            >
              Volunteer
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
