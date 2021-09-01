import { Link } from 'react-router-dom'

const Navbar = ({username}) => {
    return ( 
        <header>
            <h2>
                {username}
            </h2>
            <nav>
                <Link to="/todoReactJS/">All</Link>
                <Link to='/todoReactJS/create'>Create</Link>
            </nav>
        </header>
    );
}
 
export default Navbar;