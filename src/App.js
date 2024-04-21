import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Category from "./components/Category";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
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

export default App;
