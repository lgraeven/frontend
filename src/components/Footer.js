import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook } from "react-icons/bs"

const Footer = () => {
    return (
        <footer>
            <aside>
                <ul className="reseaux">
                    <li><a href="https://www.instagram.com/scout_hermee_008bm/" target="_blank"><BsInstagram /></a></li>
                    <li><a href="https://www.facebook.com/UniteScoute008BM" target="_blank"><BsFacebook/></a></li>
                </ul>
                <ul className="rappel">
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/">À propos</Link></li>
                    <li><Link to="/">Termes</Link></li>
                    <li><Link to="/">Politiques</Link></li>
                </ul>
                <p>Powered by Lucas Graeven</p>
            </aside>
        </footer>
    )
}
export default Footer;