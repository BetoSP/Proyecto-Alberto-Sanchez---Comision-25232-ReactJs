import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import "./Nav.css";

export const Nav = () => {
  const { getTotalItems } = useCartContext();

  return (
    <nav>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/category/ropa"}>Ropa</Link></li>
        <li><Link to={"/category/regalos"}>Regalos</Link></li>
        <li><Link to={"/category/souvenirs"}>Souvenirs</Link></li>
        <li>
          <Link to={"/cart"}>Carrito</Link>
          {getTotalItems() > 0 && (
            <span className="in-cart">{getTotalItems()}</span>
          )}
        </li>
      </ul>
    </nav>
  );
};
