import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <nav class="navbar">
                <nav class="nav">
                    <ul class="pt-5">
                        <li class=""><Link to="/" class="logo" ><img className='rotate' src={require("../image/logo-scout.png")} alt="" /></Link></li>
                        <li><Link to="/">Actualités</Link></li>
                        <li><Link to="/">Sections</Link></li>
                        <li><Link to="/">Contact</Link></li>
                        <li><Link to="/">Photos</Link></li>
                    </ul>
                </nav>
            </nav>
        </header>
    )
}
export default Navbar;