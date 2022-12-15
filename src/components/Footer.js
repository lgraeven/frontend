import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook } from "react-icons/bs"

const Footer = () => {
    return (
        <footer>
            <aside>
                <ul className="reseaux">
                    <li><Link to="/"></Link><BsInstagram /></li>
                    <li><Link to="https://www.facebook.com/UniteScoute008BM"></Link><BsFacebook /></li>
                </ul>
                <ul className="rappel">
                    <li><Link to="/">Actualités</Link></li>
                    <li><Link to="/">Sections</Link></li>
                    <li><Link to="/">Contact</Link></li>
                    <li><Link to="/">Photos</Link></li>
                </ul>
                <p>Powered by Lucas Graeven</p>
            </aside>
        </footer>
    )
}
export default Footer;