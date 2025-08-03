import { useState } from 'react'
import { Container, Row, Col, Form, Button, Card, Alert, Badge } from 'react-bootstrap'
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaComment, FaHandsHelping, FaCheckCircle } from 'react-icons/fa'

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: [],
    availability: '',
    message: ''
  })
  const [validated, setValidated] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [errors, setErrors] = useState({})

  const interestOptions = [
    { value: 'Education & Tutoring', icon: '📚', color: '#6366f1' },
    { value: 'Food Distribution', icon: '🍽️', color: '#10b981' },
    { value: 'Community Outreach', icon: '🤝', color: '#f59e0b' },
    { value: 'Fundraising Events', icon: '💰', color: '#ef4444' },
    { value: 'Administrative Support', icon: '📋', color: '#8b5cf6' },
    { value: 'Healthcare Assistance', icon: '🏥', color: '#06b6d4' },
    { value: 'Environmental Projects', icon: '🌱', color: '#10b981' },
    { value: 'Youth Mentoring', icon: '👥', color: '#ec4899' }
  ]

  const availabilityOptions = [
    'Weekends Only',
    'Weekday Evenings',
    'Full-time (40+ hours/week)',
    'Part-time (10-20 hours/week)',
    'Occasional Events',
    'Summer Break',
    'Flexible Schedule'
  ]

  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Phone validation
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!phoneRegex.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    // Interests validation
    if (formData.interests.length === 0) {
      newErrors.interests = 'Please select at least one area of interest'
    }

    // Availability validation
    if (!formData.availability) {
      newErrors.availability = 'Please select your availability'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setValidated(true)

    if (validateForm()) {
      // Simulate form submission
      console.log('Form submitted:', formData)
      setShowAlert(true)
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        interests: [],
        availability: '',
        message: ''
      })
      setValidated(false)
      setErrors({})

      // Hide alert after 5 seconds
      setTimeout(() => setShowAlert(false), 5000)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleInterestChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))

    if (errors.interests) {
      setErrors(prev => ({
        ...prev,
        interests: ''
      }))
    }
  }

  return (
    <section id="volunteer" className="py-5" style={{ background: 'linear-gradient(135deg, #e0e7ff 0%, #f0f9ff 100%)' }}>
      <Container>
        <Row className="mb-5">
          <Col lg={10} className="mx-auto text-center">
            <Badge bg="primary" className="mb-3 px-3 py-2 fs-6 rounded-pill">
              <FaHandsHelping className="me-2" />
              Volunteer Application
            </Badge>
            <h2 className="display-3 fw-bold mb-4 text-gradient">
              Join Our Team
            </h2>
            <p className="lead text-muted fs-4">
              Ready to make a difference? Fill out the form below and become part of our 
              <span className="fw-semibold text-primary"> volunteer family</span>.
            </p>
          </Col>
        </Row>

        {showAlert && (
          <Row className="mb-4">
            <Col lg={10} className="mx-auto">
              <Alert variant="success" dismissible onClose={() => setShowAlert(false)} className="border-0 shadow-lg rounded-4">
                <div className="d-flex align-items-center">
                  <FaCheckCircle className="me-3 text-success" size={24} />
                  <div>
                    <Alert.Heading className="h5 mb-2">Thank you for volunteering!</Alert.Heading>
                    <p className="mb-0">
                      We've received your application and will contact you within 2-3 business days. 
                      Welcome to the Hope Foundation family!
                    </p>
                  </div>
                </div>
              </Alert>
            </Col>
          </Row>
        )}

        <Row>
          <Col lg={10} className="mx-auto">
            <Card className="shadow-lg border-0 rounded-4 overflow-hidden">
              <div 
                className="position-absolute top-0 start-0 w-100"
                style={{ 
                  height: '6px',
                  background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)'
                }}
              ></div>
              <Card.Body className="p-5">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Label className="d-flex align-items-center">
                          <FaUser className="me-2 text-primary" />
                          <span className="fw-semibold">Full Name *</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          isInvalid={!!errors.name}
                          placeholder="Enter your full name"
                          className="form-control-lg"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Label className="d-flex align-items-center">
                          <FaEnvelope className="me-2 text-primary" />
                          <span className="fw-semibold">Email Address *</span>
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          isInvalid={!!errors.email}
                          placeholder="Enter your email"
                          className="form-control-lg"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Label className="d-flex align-items-center">
                          <FaPhone className="me-2 text-primary" />
                          <span className="fw-semibold">Phone Number *</span>
                        </Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          isInvalid={!!errors.phone}
                          placeholder="Enter your phone number"
                          className="form-control-lg"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.phone}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Label className="d-flex align-items-center">
                          <FaCalendarAlt className="me-2 text-primary" />
                          <span className="fw-semibold">Availability *</span>
                        </Form.Label>
                        <Form.Select
                          name="availability"
                          value={formData.availability}
                          onChange={handleInputChange}
                          isInvalid={!!errors.availability}
                          className="form-select-lg"
                        >
                          <option value="">Select your availability</option>
                          {availabilityOptions.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          {errors.availability}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold mb-3">
                      Areas of Interest * (Select all that apply)
                    </Form.Label>
                    <Row>
                      {interestOptions.map((interest, index) => (
                        <Col xs={12} sm={6} lg={4} key={index} className="mb-3">
                          <div 
                            className={`p-3 rounded-3 border-2 cursor-pointer transition-all interest-option ${
                              formData.interests.includes(interest.value) 
                                ? 'border-primary bg-primary bg-opacity-10' 
                                : 'border-light bg-light bg-opacity-50'
                            }`}
                            style={{ 
                              cursor: 'pointer',
                              minHeight: '60px',
                              display: 'flex',
                              alignItems: 'center'
                            }}
                            onClick={() => handleInterestChange(interest.value)}
                          >
                            <Form.Check
                              type="checkbox"
                              id={`interest-${index}`}
                              label={
                                <span className="d-flex align-items-center w-100">
                                  <span className="me-2 fs-5">{interest.icon}</span>
                                  <span className="fw-medium text-wrap">{interest.value}</span>
                                </span>
                              }
                              checked={formData.interests.includes(interest.value)}
                              onChange={() => handleInterestChange(interest.value)}
                              className="w-100"
                            />
                          </div>
                        </Col>
                      ))}
                    </Row>
                    {errors.interests && (
                      <div className="text-danger small mt-1">{errors.interests}</div>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-5">
                    <Form.Label className="d-flex align-items-center">
                      <FaComment className="me-2 text-primary" />
                      <span className="fw-semibold">Additional Message (Optional)</span>
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us why you want to volunteer or any additional information..."
                      className="form-control-lg"
                    />
                  </Form.Group>

                  <div className="text-center">
                    <Button
                      variant="primary"
                      size="lg"
                      type="submit"
                      className="px-5 py-3 btn-enhanced fw-bold"
                      style={{ borderRadius: '50px', letterSpacing: '0.5px' }}
                    >
                      <FaHandsHelping className="me-2" />
                      Submit Application
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default VolunteerForm
