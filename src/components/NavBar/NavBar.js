import './NavBar.css';

const Navbar = () => {
    return(
        <div    className="column0">
            <ul className="nav-bar">
                <li className="nav-list"><a className="nav-link1" href="#welcome">home</a></li>
                <li className="nav-list"><a className="nav-link2" href="#group"    id="about">Group</a></li>
                <li className="nav-list"><a className="nav-link3" href="#members"    id="about">Members</a></li>
            </ul>
        </div>
    );
}

export default Navbar;