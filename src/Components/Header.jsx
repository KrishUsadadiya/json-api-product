import { Navbar, Nav } from "react-bootstrap";
import { IoMdHome } from "react-icons/io";
import './button.css'

function Header() {
  return (
    <>
      <Navbar className="bg-dark w-100 p-2 mb-4 text-white justify-content-around">
        <Navbar.Brand className="text-white" href="/"><IoMdHome /></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="/add" className="button-19"> Add Product ➕</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
