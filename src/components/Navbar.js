const Navbar = () => {
    return (
        <header>
            <nav>
                <a href="./" class="logo" target="_blank"><img src="" alt=""/></a>

                <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
                <label for="menu-icon"></label>
                <nav class="nav">
                    <ul class="pt-5">
                        <li><a href="#">Actualités</a></li>
                        <li><a href="#">Sections</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Photos</a></li>
                    </ul>
                </nav>

                <div class="section-center">
                    <h1 class="mb-0"></h1>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;