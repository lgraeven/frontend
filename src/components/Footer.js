import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook } from "react-icons/bs"

const Footer = () => {
    return (
        <footer>
            <aside>
                <ul className="reseaux">
                    <li><Link target="_blank" to="/"><BsInstagram /></Link></li>
                    <li><Link target="_blank" to="https://www.facebook.com/UniteScoute008BM"><BsFacebook /></Link></li>
                </ul>
                <ul className="rappel">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Terms</Link></li>
                    <li><Link to="/">Privacy policy</Link></li>
                </ul>
                <p>Powered by Lucas Graeven</p>
            </aside>
        </footer>
    )
}
export default Footer;