import './App.css';
import { useState } from 'react';

import photo_2 from './photo_2.png'


function App() {

  const [openProject1, setOpenProject1] = useState(false);
  const [openProject2, setOpenProject2] = useState(false);

  const SERVER_URL = "http://localhost:8081";


  const sendEmail = (e) => {

    e.preventDefault();
    const inputname = document.getElementById("input-name");
    const name_text = inputname.value.trim()

    const inputemail = document.getElementById("input-email");
    const email_text = inputemail.value.trim();

    const inputmessage = document.getElementById("input-message");
    const message_text = inputmessage.value.trim()
    

    fetch(`${SERVER_URL}/addUserDetails`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name_text,
          email: email_text,  
          message: message_text
        }),
        credentials: "include"  
      })
      .then(res => {
          if (!res.ok) throw new Error("Failed to send message");
          return res.json();
      })
      .then(() => {
        alert("Message send successfully")
          inputname.value = "";
          inputemail.value = "";
          inputmessage.value = "";
      })
      .catch(err => alert(err.message));



};


  return (
    <div className="App">
      <header className="App-header">
        <div className='App-header-title'>Jebish J</div>
        <div className='App-header-parts'>
          <div className='App-header-part'>
          <a href="#">Home</a>
          </div>
          <div className='App-header-part'>
          <a href="#skills">Skills</a>
          </div>

          <div className='App-header-part'>
            <a href="#about">About</a>
          </div>

          <div className='App-header-part'>
            <a href="#projects">Projects</a>
          </div>

          <div className='App-header-part'>
            <a href="#contact">Contact</a>
          </div>

          <div className='App-header-part'>
            <a href="#achievements">Achievements</a>
          </div>

        </div>
      </header>

      <div className='App-body'>
        <div className='App-body-about' id='about'>
          <h2 className='App-body-parts-title'>About Me</h2>
          <div className='about-content'>
            <div className='about-text'>
              <p>
                Motivated Artificial Intelligence and Data Science undergraduate with strong interest in Machine Learning, Computer Vision, and Cyber Security. Seeking opportunities to apply skills in real-world projects and research environments.
              </p>
              <h4>Education</h4>
              <p>
                KPR Institute of Engineering and Technology, Coimbatore<br />
                B.Tech — Artificial Intelligence and Data Science<br />
                CGPA: 8.2
              </p>
              <h4>Area of Interest</h4>
              <p>
                Artificial Intelligence and Machine Learning, Computer Vision, Full stack , Data Science
              </p>
            </div>
            <div className='about-image'>
              <img src={photo_2} alt="photo" />
            </div>
          </div>
        </div>

        <div className='App-body-skills' id='skills'>
          <h2 className='App-body-parts-title'>Skills</h2>
          <div className='App-body-skills-parts'>
            <div className='App-body-skills-technical'>
              <h2 className='skills-part'>Technical Skills</h2>
              <div className="skill-item">
                <h4>Programming : </h4>
                <p>Python, Java, JavaScript</p>
              </div>

              <div className="skill-item">
                <h4>Machine Learning / AI : </h4>
                <p>Machine Learning, Computer Vision, YOLOv11</p>
              </div>

              <div className="skill-item">
                <h4>Web Technologies : </h4>
                <p>HTML, CSS, React (Basics)</p>
              </div>

              <div className="skill-item">
                <h4>Developer Tools : </h4>
                <p>Git, VS Code, Jupyter Notebook</p>
              </div>
            </div>
            <div className='App-body-skills-professional'>
              <h2 className='skills-part'>Professional Skills</h2>
              <div className="skill">
                  <span>Problem Solving</span>
                  <div className="progress-bar">
                      <div className="progress ps"></div>
                  </div>
              </div>

              <div className="skill">
                  <span>Logical Thinking</span>
                  <div className="progress-bar">
                      <div className="progress lt"></div>
                  </div>
              </div>

              <div className="skill">
                  <span>Teamwork</span>
                  <div className="progress-bar">
                      <div className="progress tw"></div>
                  </div>
              </div>

              <div className="skill">
                  <span>Time Management</span>
                  <div className="progress-bar">
                      <div className="progress tm"></div>
                  </div>
              </div>

              <div className="skill">
                  <span>Quick Learner</span>
                  <div className="progress-bar">
                      <div className="progress ql"></div>
                  </div>
              </div>

              <div className="skill">
                  <span>Adaptability</span>
                  <div className="progress-bar">
                      <div className="progress ad"></div>
                  </div>
              </div>

              <div className="skill">
                  <span>Communication Skills</span>
                  <div className="progress-bar">
                      <div className="progress cs"></div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className='App-body-projects' id='projects'>
           <h2 className='App-body-parts-title'>Projects</h2>
           <div className='project-card-parts'>
            <div className="project-card" onClick={() => {setOpenProject1(!openProject1); setOpenProject2(false)}}>
              {openProject1 && (
              <>
                <h5>Skill Lens – Resume Analyzer</h5>
                <ul>
                  <li>Built a web application to parse resumes and extract technical skills automatically.</li>
                  <li>Compares candidate skills with recruiter-specified job requirements to determine match percentage.</li>
                  <li>If candidate skills meet the minimum criteria, the system triggers a technical test for further evaluation.</li>
                  <li>Test scores above 80% qualify the candidate to initiate a chat with recruiters for potential opportunities.</li>
                  <li>Provides visual insights and suggestions for skill improvement to better match job requirements.</li>
                  
                </ul>

              </>
            )}

              {!openProject1 && (
                <h3 className='Skill-title-name'>Skill Lens Resume Analyzer</h3>
              )}
            </div>

            
            <div className="project-card"  onClick={() => {setOpenProject2(!openProject2); setOpenProject1(false)}}>
              {openProject2 && (
              <>
                <h5>Cat and Dog Classification using YOLOv11</h5>
                <ul>
                  <li>Developed an object detection system to identify cats and dogs in images</li>
                  <li>Used Ultralytics YOLOv11 pretrained model with transfer learning</li>
                  <li>Prepared dataset in YOLO format and trained on custom labelled data</li>
                  <li>Achieved real-time prediction with bounding boxes and class labels</li>
                </ul>
              </>
            )}

              {!openProject2 && (
                <h3 className='Skill-title-name'>Cat and Dog Classification using YOLOv11</h3>
              )}
            </div>
            
            </div>
            <p className="tech-used">
              <strong>Technologies Used:</strong> Python • Machine Learning • NLP • Computer Vision • YOLOv11 • PyTorch • OpenCV • HTML • CSS  • Git

            </p>
          
        </div>
        
        <div className='App-body-achievements' id='achievements'>
        
          <h2 className='App-body-parts-title'>Achievements</h2>
          <div className='achievement-container'>
            <div className='achievement-card'>
              <span className='achievement-title'>
                Practical Cyber Security for Cyber Security Practitioners
              </span>
              <span className='achievement-date'>Jul – Oct 2025</span>
            </div>

            <div className='achievement-card'>
              <span className='achievement-title'>
                4th Prize – DevSpark Hackathon
              </span>
              <span className='achievement-date'>Team-based innovation challenge</span>
            </div>
          </div>
        </div>
        <div className='App-body-contact' id='contact'>
          <h2 className='App-body-parts-title'>Contact</h2>
          <form className='contact-form' onSubmit={sendEmail}>
            <input type="text" name = "name" placeholder='Name : ' required id='input-name'/>
            <input type="email"name = "email" placeholder='Email : ' required id='input-email'/>
            <textarea name="message" placeholder='Message : ' required id='input-message'></textarea>
            <button type = "submit">Send Message</button>
          </form>
          <div className='contact-form-button-parts'>
            <div className='contact-form-button-part'>
              <a
                href="https://www.linkedin.com/in/jebish-j-479b6a328"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/Jebish-cyber"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>

            <div className='contact-form-button-part'>
              <a href="tel:+8148733256">Phone : 8148733256</a>

              <a href="mailto:jebishj76@gmail.com">Email : jebishj76@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="scroll-to-top" title="Back to top">↑</a>

    </div>
  );
}

export default App;
