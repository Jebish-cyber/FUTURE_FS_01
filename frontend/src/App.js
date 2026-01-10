import "./App.css";
import profile from "./assets/photo.png";
import { useState } from "react";
import { send } from "@emailjs/browser";


function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [openProject, setOpenProject] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

 
  if (!formData.name || !formData.email || !formData.message) return;

  try {
   
    const response = await fetch("http://localhost:8081/addUserDetails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      alert("Failed to save message on server");
      return;
    }

    
    const serviceId = "service_qn2kr2e";
    const templateId = "template_04vt9qx";
    const userId = "nzr69Ik-grZlqO245";

    await send(serviceId, templateId, formData, userId);

    alert("Message sent successfully via backend & email!");
    setFormData({ name: "", email: "", message: "" });

  } catch (error) {
    console.error(error);
    alert("Server or email error occurred!");
  }
};


  return (
    <>
      <header>
        <h2>Jebish J</h2>
        <nav>
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#achievements">Achievements</a>
        </nav>
      </header>

      <section id="home" className="section hero">
        <h1>Welcome to My Portfolio</h1>
        <p>AI | ML | Full Stack Developer</p>
      </section>

      <section id="about" className="section card">
        <h2>About Me</h2>

        <div className="about-content">
          <div>
            <p>
              Motivated Artificial Intelligence and Data Science undergraduate
              with strong interest in Machine Learning, Computer Vision, and
              Full stack development.
            </p>

            <h3>Education</h3>
            <p>KPR Institute of Engineering and Technology,Coimbatore</p>
            <p>B.Tech - AI & DS</p>
            <p>CGPA : 8.25</p>

            <h3>Area of Interest</h3>
            <p>AI, ML, Computer Vision, Full Stack, Data Science</p>
          </div>

          <div className="photo-box">
            <img src={profile} alt="profile" />
          </div>
        </div>
      </section>

      <section id="skills" className="section card skills-section">
  <h2>Skills</h2>

  <div className="skills-container">
   
    <div className="technical-skills">
      <h3>Technical Skills</h3>

      <p><strong>Programming :</strong> Python, Java, JavaScript</p>
      <p><strong>Machine Learning / AI :</strong> Machine Learning, YOLOv11</p>
      <p><strong>Web Technologies :</strong> HTML, CSS, React (Basics)</p>
      <p><strong>Developer Tools :</strong> Git, VS Code, Jupyter Notebook</p>
    </div>

    <div className="professional-skills">
      <h3>Professional Skills</h3>

      <div className="skill-bar">
        <span>Problem Solving</span>
        <div className="bar"><div style={{ width: "90%" }}></div></div>
      </div>

      <div className="skill-bar">
        <span>Logical Thinking</span>
        <div className="bar"><div style={{ width: "85%" }}></div></div>
      </div>

      <div className="skill-bar">
        <span>Teamwork</span>
        <div className="bar"><div style={{ width: "80%" }}></div></div>
      </div>

      <div className="skill-bar">
        <span>Time Management</span>
        <div className="bar"><div style={{ width: "75%" }}></div></div>
      </div>

      <div className="skill-bar">
        <span>Quick Learner</span>
        <div className="bar"><div style={{ width: "88%" }}></div></div>
      </div>

      <div className="skill-bar">
        <span>Adaptability</span>
        <div className="bar"><div style={{ width: "82%" }}></div></div>
      </div>
    </div>
  </div>
</section>


      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="project-grid">
          <div
            className="project-card"
            onClick={() => setOpenProject(openProject === 1 ? null : 1)}
          >
            <h3>Skill Lens Resume Analyzer</h3>

            {openProject === 1 && (
              <ul className="project-points">
                <li>AI-based resume analysis using NLP</li>
                <li>Extracts technical & soft skills automatically</li>
                <li>Matches resumes with job descriptions</li>
                <li>Improves hiring accuracy & speed</li>
                <li>Built using Python & Machine Learning</li>
              </ul>
            )}
          </div>

          <div
            className="project-card"
            onClick={() => setOpenProject(openProject === 2 ? null : 2)}
          >
            <h3>Cat & Dog Classification (YOLOv11)</h3>

            {openProject === 2 && (
              <ul className="project-points">
                <li>Real-time object detection system</li>
                <li>Uses YOLOv11 deep learning model</li>
                <li>High accuracy animal classification</li>
                <li>Optimized for image & video input</li>
                <li>Implemented with OpenCV & Python</li>
              </ul>
            )}
          </div>
        </div>
      </section>

      <section id="achievements" className="section card">
        <h2>Achievements</h2>
        <div className="achievement">Practical Cyber Security – Jul to Oct 2025</div>
        <div className="achievement">4th Prize – DevSpark Hackathon</div>
      </section>

      <section id="contact" className="section card">
        <h2>Contact</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name"
            value={formData.name} onChange={handleChange} required />

          <input type="email" name="email" placeholder="Email"
            value={formData.email} onChange={handleChange} required />

          <textarea name="message" placeholder="Message"
            value={formData.message} onChange={handleChange} required />

          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer>
        <div className="social-buttons">
          <a href="https://www.linkedin.com/in/jebish-j-479b6a328/"
             target="_blank" rel="noopener noreferrer" className="linkedin">
            LinkedIn
          </a>
          <a href="https://github.com/Jebish-cyber"
             target="_blank" rel="noopener noreferrer" className="github">
            GitHub
          </a>
        </div>

        <div className="contact-info">
          <span>Phone : 8148733256</span>
          <span>Email : jebishj76@gmail.com</span>
        </div>
      </footer>

      <button
        id="topBtn"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </>
  );
}

export default App;
