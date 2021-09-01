import { Link } from 'react-router-dom'

const Navbar = ({username}) => {
    return ( 
        <header>
            <h2>
                {username}
            </h2>
            <nav>
                <Link to="/">All</Link>
                <Link to='/create'>Create</Link>
            </nav>
        </header>
    );
}
 
export default Navbar;