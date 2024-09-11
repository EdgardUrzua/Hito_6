import { useCart } from "../context/CartContext";
import formatCurrency from "../utils/formatCurrency";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, addToCart, removeFromCart, total } = useCart();

  return (
    <div className="container mt-4">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((pizza) => (
            <div key={pizza.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={pizza.imagen}
                    className="img-fluid rounded-start"
                    alt={pizza.nombre}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{pizza.nombre}</h5>
                    <p className="card-text">
                      Precio: {formatCurrency(pizza.precio || 0)}
                    </p>
                    <p className="card-text">Cantidad: {pizza.cantidad}</p>
                    <button
                      className="btn btn-secondary me-2"
                      onClick={() => removeFromCart(pizza.id)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => addToCart(pizza)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <h3>Total: {formatCurrency(total)}</h3>
          <button className="btn btn-success me-2">Pagar</button>
          <Link to="/" className="btn btn-outline-secondary">
            Seguir Comprando
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;

