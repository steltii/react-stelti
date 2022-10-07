import {Link} from 'react-router-dom'

const Navbar = () => {
    return (  
        <nav id="navbar">
            <h1>Stelti's Dojo</h1>
            <div id="links">
                <Link to="/" >Home</Link>
                <Link to="/About" >About</Link>
            </div>
        </nav>
    );
}

export default Navbar;