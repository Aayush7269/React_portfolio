import"./style.css"
import aayush from "./assets/imgs/aayush.png"
import ec from './assets/imgs/ec.png'
import Aayush_Sharma_Resume from './assets/Aayush_Sharma_Resume.docx'

function App() {
  return (
<div>
<input type="checkbox" id="darkMode" class="dark-mode-checkbox" />
<div class="wrapper">
      <label for="darkMode">
        <i class="fa-solid fa-circle-half-stroke dark-mode-toggle"></i>
      </label>

      <header class="flex primary-header">
        <div class="logo flex">
          <div>
            <h1>Aayush</h1>
          </div>
          <div>
            <h1 class="line">Web Developer</h1>
          </div>
        </div>

        <div class="right">
          <input type="checkbox" id="check" />
          <label for="check" class="menu-icon">
            <i class="fa-solid fa-bars text-danger"></i>
          </label>

          <ul class="navigation flex">
            <li>
              <a href="#header">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </header>

   

      <section class="section1" id="header">
        <div class="hero grid">
          <div class="left flex">
            <img src={aayush} alt="profile pic"/>
          </div>

          <div class="right  flex">
            <div class="flex">
              <div class="name">Aayush</div>
              <div class="tag">Web Developer</div>
            </div>

            <button >
              <a href={Aayush_Sharma_Resume} download>
              
                Download CV <i class="fa-solid fa-download"></i
              ></a>
            </button>
          </div>
        </div>
      </section>

      
      <section class="section2">
        <div class="info-container flex">
          <div class="info-lists flex">
       
            <div class="info-content flex">
              <div class="icon-container flex">
                <i class="fa-solid fa-award"></i>
              </div>
              <span>
                <h5>IT</h5>
                <p>Graduate</p>
              </span>
            </div>

            <div class="info-divider"></div>

            <div class="info-content flex">
              <div class="icon-container flex">
                <i class="fa-solid fa-award"></i>
              </div>
              <span>
                <h5>5 + Projects</h5>
                <p>Completed</p>
              </span>
            </div>

            <div class="info-divider"></div>

            <div class="info-content flex">
              <div class="icon-container flex">
                <i class="fa-solid fa-award"></i>
              </div>
              <span>
                <h5>1 + Year</h5>
                <p>Job Experience</p>
              </span>
            </div>
          </div>
        </div>
      </section>


<div>
      <section class="section3" id="skills">
        <div class="skills-container flex">
          <div class="flex">
            <i class="fa-brands fa-html5"></i>
            <span>HTML</span>
          </div>

          <div class="flex">
            <i class="fa-brands fa-css3-alt"></i>
            <span>CSS</span>
          </div>
          <div class="flex">
            <i class="fa-brands fa-square-js"></i>
            <span>JavaScript</span>
          </div>
          <div class="flex">
            <i class="fa-brands fa-react"></i>
            <span>React</span>
          </div>
          <div class="flex">
            <i class="fa-regular fa-folder-open"></i>
            <span>Firebase</span>
          </div>
        </div>
      </section>


      <section class="section4 flex" id="projects">
        <h2 class="title">My Recent Work</h2>
        <div class="projects-container grid">
          <div class="project-card flex">
            <div class="top">
              <img src={ec} alt="" />
            </div>
            <div class="bottom">
              <p>Full-stack Web App built with React & Firebase</p>
              <p>Dec 15 2022</p>
            </div>
          </div>
          <div class="project-card flex">
            <div class="top">
              <img src={ec} alt="" />
            </div>
            <div class="bottom">
              <p>Full-stack Web App built with React & Firebase</p>
              <p>Dec 15 2022</p>
            </div>
          </div>
          <div class="project-card flex">
            <div class="top">
              <img src={ec} alt="" />
            </div>
            <div class="bottom">
              <p>Full-stack Web App built with React & Firebase</p>
              <p>Dec 15 2022</p>
            </div>
          </div>
          <div class="project-card flex">
            <div class="top">
              <img src={ec} alt="" />
            </div>
            <div class="bottom">
              <p>Full-stack Web App built with React & Firebase</p>
              <p>Dec 15 2022</p>
            </div>
          </div>
        </div>
      </section>

     

      <section class="section5 flex" id="about">
        <h2 class="title">About Me</h2>
        <div class="about-container flex">
          <div class="left">
            <img src="./assets/imgs/aayush.png" alt="" />
          </div>
          <div class="right flex">
            <h2>Aayush Sharma</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              expedita tenetur ipsa optio eveniet suscipit autem quia ratione,
              sint obcaecati saepe dolor dolores. Quo, officiis maiores at
              distinctio modi perferendis?
            </p>

            <p class="flex">Sydney, Australia</p>

            <div class="flex">
              <div class="tag">Intrests</div>
              <div class="flex">
                <span>Coding</span>
                <span>Cricket</span>
                <span>Music</span>
              </div>
            </div>
          </div>
        </div>
      </section>

 

      <section class="section6 flex" id="contact">
        <h2 class="title">Get In Touch</h2>

        <div class="socials flex">
          
            <a href="https://www.linkedin.com/in/aayush-sharma-071807215/">
                <i class="fa-brands fa-linkedin"></i>
            </a>
         
          
            <a href="https://github.com/Aayush7269">
                <i class="fa-brands fa-square-github"></i>
            </a>
         
          
            <a href="https://twitter.com/AayushS72226509">
                <i class="fa-brands fa-square-twitter"></i>
            </a>
         
          
        <a href="https://www.facebook.com/profile.php?id=100015323380081">
            <i class="fa-brands fa-facebook"></i>
        </a>
         
        </div>
        <h3 class="title">OR</h3>

        <div class="email-section flex">
          <div class="email flex">
            <a href="mailto:user@email.com">expalme@gmail.com</a>
            <div class="send">
              <i class="fa-solid fa-paper-plane"></i>
            </div>
          </div>
        </div>
      </section>

    
      <footer>
        <div class="footer-container flex">
          <div class="flex links">
            <h3>Links</h3>
            <ul class="flex">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About Me</a>
              </li>
            </ul>
          </div>
          <div class="flex socials">
            <h3>Socials</h3>
            <ul class="flex">
              <li><a href="https://www.linkedin.com/in/aayush-sharma-071807215/">LinkedIn</a></li>
              <li><a href="https://github.com/Aayush7269">Githhub</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=100015323380081">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">&copy; All right reserved.</div>
      </footer>
<span class="last">
   
    <div>
      <input type="checkbox" id="pageTop" class="page-top-scroll" />
      <label for="pageTop">
     
        <a href="#header"> <i class="fa-solid fa-angle-up"></i></a>
     

    </label>
    
    </div>
    </span>
    </div>
  </div>
</div>
  );
}

export default App;
