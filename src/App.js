import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Category from "./components/Category";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import { FaRegCopyright } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { ImInstagram } from "react-icons/im";


function App() {
  return (
    <BrowserRouter>
    <Nav>
      <GiKnifeFork/>
      <Logo to={"/"}>Andre<sub>w</sub></Logo>
    </Nav>
    <div className="App">
      <Search />
      <Category/>
      <Pages />
    </div>
      <Footer>
        <h3>

        Trademark of Andre<sub>w</sub> Multi-National Conglomerate <FaRegCopyright />

        </h3>
        <h5>
           <VscGithub /><a href="https://www.github.com/drew2411/miniproj" target="_blank">  My Github  </a>
           <ImInstagram /><a href="https://www.instagram.com/_drew_2411" target="_blank">  My Instagram  </a>
        </h5>
      </Footer>
    
    </BrowserRouter>
  );
}

const Logo=styled(Link)`
  text-decoration:none;
  font-size:1.5rem;
  font-weight:800;
  // font-family:"Lobster Two", cursive;
  //font-family: "Calibri"
`;

const Nav= styled.div`
  padding: 4rem 0rem;
  display:flex;
  justify-content:center;
  align-items:center;
  svg{
    font-size:2rem;

  }

`
const Footer= styled.div`
  justify-content:center;
  text-align:center;
  margin-top:1rem;
  color:white;
  padding:1rem;
  margin-left:0;
  margin:right:0;
  width:100%;
  margin:0;
  background-color:black;
  position: fixed; /* Fix the footer at the bottom of the viewport */
  bottom: 0; /* Align the footer to the bottom */
  left: 0; /* Align the footer to the left */
  width: 100%; /* Make the footer span the full width of the page */
  background-color: black; /* Example background color */
  padding: 15px; /* Example padding */
  a{
    color:white;
    text-decoration:none;
    
  }
`

export default App;
