import './App.css';
import Experience from './Components/Experience'
import Skill from'./Components/Skill'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
        <div class="hero-section">
            <span class ="hero-text-large">Rachel Danover</span>
            <span class = "hero-text-small">Aerospace Software Developer</span>
        </div>

        <div class="section-heading">
            <p>About</p>
        </div>

        <p class="about-blurb">My name is Rachel Danover. I am a 4th year Computer Science Major looking for aerospace opportunities. Here is my Resume</p>
        
        <div class="section-heading">
            <p>Education</p>
        </div>

        <div className = "experiences">
        <Experience 
        title="Software Engineer"
        company="Company ABC"
        date="January 2022 - Present"
        img="./Components/E52CA882-131C-4E13-836B-2B2EB6A6DC45.jpg"
        alt="Cat industries"/>
        </div>
        
        <div class="section-heading">
            <p>Skills</p>
        </div>
        <div class = "skills">
            <div class="skill-row">
              <Skill img="./Components/E52CA882-131C-4E13-836B-2B2EB6A6DC45.jpg"
        alt="Cat industries"/>
              <Skill img="./Components/E52CA882-131C-4E13-836B-2B2EB6A6DC45.jpg"
        alt="Cat industries"/>
              <Skill img="./Components/E52CA882-131C-4E13-836B-2B2EB6A6DC45.jpg"
        alt="Cat industries"/>
            </div>
            <div class="skill-row">
              <Skill img="./Components/E52CA882-131C-4E13-836B-2B2EB6A6DC45.jpg"
        alt="Cat industries"/>
              <Skill img="./Components/E52CA882-131C-4E13-836B-2B2EB6A6DC45.jpg"
        alt="Cat industries"/>
              <Skill img="./Components/E52CA882-131C-4E13-836B-2B2EB6A6DC45.jpg"
        alt="Cat industries"/>
            </div>
        </div>
        <div class="section-heading">
            <p>Experience/Projects</p>
        </div>
        <div class = "experiences">
        <Experience title="Software Engineer"
        company="Company ABC"
        date="January 2022 - Present"
        img="./Components/E52CA882-131C-4E13-836B-2B2EB6A6DC45.jpg"
        alt="Cat industries"/>
        </div>
        <div class="section-heading">
            <p>Interests</p>
        </div>
        <div class = "skills">
            <div class="skill-row">
              <Skill
              img="./Components/E52CA882-131C-4E13-836B-2B2EB6A6DC45.jpg"
              alt="Cat industries"/>
              <Skill img="./Components/E52CA882-131C-4E13-836B-2B2EB6A6DC45.jpg"
              alt="Cat industries"/>
              <Skill img="./Components/E52CA882-131C-4E13-836B-2B2EB6A6DC45.jpg"
              alt="Cat industries"/>
            </div>
            <div class="skill-row">
              <Skill img="./Components/E52CA882-131C-4E13-836B-2B2EB6A6DC45.jpg"
              alt="Cat industries"/>
              <Skill img="./Components/E52CA882-131C-4E13-836B-2B2EB6A6DC45.jpg"
              alt="Cat industries"/>
              <Skill img="./Components/E52CA882-131C-4E13-836B-2B2EB6A6DC45.jpg"
              alt="Cat industries"/>
            </div>
        </div>
    </div>
  );
}

export default App;
