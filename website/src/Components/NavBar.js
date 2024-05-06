import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState,useEffect} from "react";

function BasicExample() {
    const[activeLink, setActiveLink] = useState('home');
    const[scrolled, seScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () =>{
            if(window.scrollY>50){
                seScrolled(true);
            }
            else{
                seScrolled(false);
            }
        }

        window.addEventListener("scroll",onScroll);

        return() => window.removeEventListener("scroll",onScroll);
    },[])
    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
      <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className='navbar-toggler-icon' ></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink ==='home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink ==='about' ? 'active navbar-link' : 'navbar-link' }onClick={()=> onUpdateActiveLink('about')}>About </Nav.Link>
            <Nav.Link href="#education" className={activeLink ==='education' ? 'active navbar-link' : 'navbar-link'}onClick={()=> onUpdateActiveLink('education')}>Education</Nav.Link>
            <Nav.Link href="#skills" className={activeLink ==='skills' ? 'active navbar-link' : 'navbar-link'}onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#experience" className={activeLink ==='experience' ? 'active navbar-link' : 'navbar-link'}onClick={()=> onUpdateActiveLink('experience')}>Experience</Nav.Link>
            <Nav.Link href="#projects" className={activeLink ==='projects' ? 'active navbar-link' : 'navbar-link'}onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#interests" className={activeLink ==='interests' ? 'active navbar-link' : 'navbar-link'}onClick={()=> onUpdateActiveLink('interests')}>Interests</Nav.Link>
            <Nav.Link href="#contact" className={activeLink ==='contact' ? 'active navbar-link' : 'navbar-link'}onClick={()=> onUpdateActiveLink('contact')}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;