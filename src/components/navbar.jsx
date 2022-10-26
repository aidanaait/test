import {Container, Nav,NavLink,Button,Navbar as NavbarBs} from 'react-bootstrap';
import "../styles/navbar.css";


const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          My Shopping
        </span>
        <Nav className='me-auto'>
                     <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                     <Nav.Link to="/store" as={NavLink}>
                        Store
                     </Nav.Link>
                     <Nav.Link to="/aabout" as={NavLink}>
                         About
                     </Nav.Link>
                 </Nav>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;