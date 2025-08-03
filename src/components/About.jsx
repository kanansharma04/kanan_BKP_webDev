import { Container, Row, Col, Card, Badge } from 'react-bootstrap'
import { FaUsers, FaUtensils, FaGraduationCap, FaHeart, FaGlobe, FaHandsHelping, FaAward, FaTrophy } from 'react-icons/fa'

const About = () => {
  const stats = [
    { icon: FaUsers, number: '500+', label: 'Active Volunteers', color: '#6366f1', bgColor: '#f0f9ff' },
    { icon: FaUtensils, number: '10K+', label: 'Meals Served', color: '#10b981', bgColor: '#f0fdf4' },
    { icon: FaGraduationCap, number: '200+', label: 'Children Educated', color: '#f59e0b', bgColor: '#fffbeb' },
    { icon: FaHeart, number: '50+', label: 'Communities Helped', color: '#ef4444', bgColor: '#fef2f2' }
  ]

  const goals = [
    {
      icon: FaGlobe,
      title: 'Global Impact',
      description: 'Expanding our reach to help communities worldwide through sustainable development programs and cross-cultural initiatives.',
      color: '#6366f1'
    },
    {
      icon: FaGraduationCap,
      title: 'Education Access',
      description: 'Providing quality education and learning opportunities to underprivileged children through innovative teaching methods.',
      color: '#10b981'
    },
    {
      icon: FaHandsHelping,
      title: 'Community Building',
      description: 'Strengthening communities through volunteer programs, local partnerships, and sustainable development projects.',
      color: '#f59e0b'
    }
  ]

  return (
    <section id="about" className="py-5" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
      <Container>
        <Row className="mb-5">
          <Col lg={10} className="mx-auto text-center">
            <Badge bg="primary" className="mb-3 px-3 py-2 fs-6 rounded-pill">
              <FaAward className="me-2" />
              About Our Mission
            </Badge>
            <h2 className="display-3 fw-bold mb-4 text-gradient">
              Hope Foundation
            </h2>
            <p className="lead text-muted fs-4">
              Making a difference since 2018, one community at a time through 
              <span className="fw-semibold text-primary"> dedicated service</span> and 
              <span className="fw-semibold text-success"> sustainable impact</span>.
            </p>
          </Col>
        </Row>

        <Row className="mb-5 align-items-center">
          <Col lg={6} className="mb-4">
            <div className="about-image position-relative">
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Volunteers helping community" 
                className="img-fluid rounded shadow-lg"
                style={{ height: '450px', objectFit: 'cover', width: '100%' }}
              />
              <div className="position-absolute top-0 end-0 m-3">
                <Badge bg="success" className="px-3 py-2 fs-6">
                  <FaTrophy className="me-2" />
                  Award Winning NGO
                </Badge>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-content">
              <h3 className="h1 mb-4 fw-bold">Our Inspiring Journey</h3>
              <p className="mb-4 fs-5 text-muted">
                Founded in 2018, Hope Foundation began as a small group of passionate individuals 
                committed to making a positive impact in their local community. What started as 
                weekend food distribution has grown into a comprehensive organization addressing 
                education, healthcare, and economic development.
              </p>
              <p className="mb-4 fs-5 text-muted">
                Our journey has been marked by countless acts of kindness, dedicated volunteers, 
                and the unwavering belief that together, we can create lasting change. From 
                providing educational resources to building sustainable community programs, 
                we work hand-in-hand with local leaders to ensure our impact is meaningful and enduring.
              </p>
              <div className="d-flex flex-wrap gap-2 mb-4">
                <Badge bg="primary" className="px-3 py-2">
                  <FaGlobe className="me-1" />
                  International Reach
                </Badge>
                <Badge bg="success" className="px-3 py-2">
                  <FaUsers className="me-1" />
                  Community Driven
                </Badge>
                <Badge bg="warning" className="px-3 py-2">
                  <FaHeart className="me-1" />
                  Impact Focused
                </Badge>
              </div>
              <p className="mb-0 fs-5 text-muted fw-medium">
                Today, we're proud to serve communities across multiple regions, but our mission 
                remains the same: to empower individuals, strengthen communities, and build a 
                more hopeful future for everyone.
              </p>
            </div>
          </Col>
        </Row>

        {/* Enhanced Statistics Section */}
        <Row className="mb-5">
          <Col xs={12}>
            <h3 className="text-center mb-5 display-5 fw-bold">Our Growing Impact</h3>
            <Row>
              {stats.map((stat, index) => (
                <Col sm={6} lg={3} key={index} className="mb-4">
                  <Card className="text-center border-0 shadow-lg h-100 overflow-hidden position-relative">
                    <div 
                      className="position-absolute top-0 start-0 w-100 h-100 opacity-10"
                      style={{ background: `linear-gradient(135deg, ${stat.color}, ${stat.color}90)` }}
                    ></div>
                    <Card.Body className="py-5 position-relative">
                      <div 
                        className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                        style={{ 
                          width: '80px', 
                          height: '80px', 
                          backgroundColor: stat.bgColor,
                          border: `3px solid ${stat.color}20`
                        }}
                      >
                        <stat.icon size={35} style={{ color: stat.color }} />
                      </div>
                      <h3 className="display-4 fw-bold mb-2" style={{ color: stat.color }}>
                        {stat.number}
                      </h3>
                      <p className="mb-0 text-muted fw-semibold fs-5">{stat.label}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Enhanced Goals Section */}
        <Row>
          <Col xs={12}>
            <h3 className="text-center mb-5 display-5 fw-bold">Our Strategic Goals</h3>
            <Row>
              {goals.map((goal, index) => (
                <Col md={4} key={index} className="mb-4">
                  <Card className="h-100 border-0 shadow-lg overflow-hidden">
                    <Card.Body className="p-4 text-center position-relative">
                      <div 
                        className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
                        style={{ 
                          width: '100px', 
                          height: '100px', 
                          background: `linear-gradient(135deg, ${goal.color}, ${goal.color}80)`,
                          boxShadow: `0 10px 30px ${goal.color}30`
                        }}
                      >
                        <goal.icon size={40} color="white" />
                      </div>
                      <h5 className="fw-bold mb-3 fs-4">{goal.title}</h5>
                      <p className="text-muted mb-0 fs-6 lh-lg">{goal.description}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
