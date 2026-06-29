import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">
            Welcome to RedSky
          </span>

          <h1>
            Build Modern Digital
            Solutions For Your Business
          </h1>

          <p>
            We help businesses create fast,
            scalable and modern web applications
            using React, Node.js and modern
            cloud technologies.
          </p>

          <div className="hero-buttons">
            <Link to="/products" className="btn">
              View Products
            </Link>

            <Link
              to="/contact"
              className="btn btn-outline"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000"
            alt="Technology"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>Why Choose Us</h2>

          <div className="features-grid">
            <div className="card card1">
              <h3>⚡ Fast Development</h3>
              <p>
                Modern technologies for rapid
                development and deployment.
              </p>
            </div>

            <div className="card card2">
              <h3>🔒 Secure Systems</h3>
              <p>
                Enterprise level security for
                your business applications.
              </p>
            </div>

            <div className="card card3">
              <h3>📈 Scalable</h3>
              <p>
                Solutions that grow with your
                business requirements.
              </p>
            </div>

            <div className="card card4">
              <h3>Extra Feature</h3>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about-section">
        <div className="container about-grid">
          <div>
             <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900"
              alt="Team"
            /> 
          </div>

          <div>
            <h2>About OctoTech</h2>

            <p>
              We specialize in web development,
              mobile applications and cloud
              solutions. Our mission is to help
              businesses build modern digital
              products.
            </p>

            <p>
              With experienced developers and
              designers, we create products that
              are fast, beautiful and scalable.
            </p>
          </div>
        </div>
      </section>
      
      <section className="services-section">
        <div className="container">
          <h2>Our Services</h2>

          <div className="services-grid">
            <div className="service-card">
              <h3>Web Development</h3>
              <p>
                Custom React and Node.js
                applications.
              </p>
            </div>

            <div className="service-card">
              <h3>Mobile Apps</h3>
              <p>
                React Native applications for
                Android and iOS.
              </p>
            </div>

            <div className="service-card">
              <h3>UI/UX Design</h3>
              <p>
                Modern and user friendly
                interfaces.
              </p>
            </div>

            <div className="service-card">
              <h3>Cloud Solutions</h3>
              <p>
                AWS and cloud infrastructure
                services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container stats-grid">
          <div>
            <h2>150+</h2>
            <p>Projects Completed</p>
          </div>

          <div>
            <h2>80+</h2>
            <p>Happy Clients</p>
          </div>

          <div>
            <h2>10+</h2>
            <p>Years Experience</p>
          </div>

          <div>
            <h2>24/7</h2>
            <p>Support</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial-section">
        <div className="container">
          <h2>What Clients Say</h2>

          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>
                "Amazing team and excellent
                service."
              </p>
              <h4>- John Smith</h4>
            </div>

            <div className="testimonial-card">
              <p>
                "Highly recommended for modern
                web applications."
              </p>
              <h4>- Sarah Lee</h4>
            </div>

            <div className="testimonial-card">
              <p>
                "Professional developers and
                great support."
              </p>
              <h4>- Michael</h4>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready To Start Your Project?</h2>

          <p>
            Let's build something amazing
            together.
          </p>

          <Link
            to="/contact"
            className="btn"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}