import './index.css';

const Header = () => {
    return (
            <header className = "header trans_300">
                <a href="#" className = "menuHamburguesa" aria-hidden="true"><i class="fas fa-bars"></i></a>
                <a href="#" className = "logo">Vaper<span>Shop</span></a>
                <nav className="navbar">
                    <ul className="navbar_menu">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Tienda</a></li>
                        <li><a href="#">Promociones</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                    <ul className="navbar_user">
                        <li><a href="#"><i className="fa fa-search" arial-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-user" arial-hidden="true"></i></a></li>
                        <li className="checkout">
                        <a href="#" className = "enlace">
                            <i className="fa fa-shopping-cart" arial-hidden="true"></i>
                            <span id="checkout_items" className="checkout_items">2</span>
                        </a>
                        </li>
                    </ul>
                </nav>
            </header>
    )
}

export default Header
