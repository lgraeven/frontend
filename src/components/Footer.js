import { Link } from "react-router-dom";
import {BsInstagram,BsFacebook} from "react-icons/bs"

const Footer = () => {
    return (
        <footer>
            <aside>
                <p>Powered by Lucas Graeven</p>
                <ul>
                    <li><Link to="/"></Link><BsInstagram/></li>
                    <li><Link to="/"></Link><BsFacebook/></li>
                </ul>
            </aside>
        </footer>
    )
}
export default Footer;