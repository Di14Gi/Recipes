import { NavLink } from "react-router-dom";

const getNavLinkClass = ({ isActive }) => isActive ? 'header-link active' : 'header-link';


function Header() {



    return (
        <div className="container">
            <div className="header-content">
                <nav className="header-nav">
                    <NavLink end to={'/'} className={getNavLinkClass}>Главная</NavLink>
                    <NavLink to={'/favorites'} className={getNavLinkClass}>Избранное</NavLink>
                    <NavLink to={'/about'} className={getNavLinkClass}>О проекте</NavLink>
                </nav>
            </div>
        </div>
        
    )
}

export default Header;