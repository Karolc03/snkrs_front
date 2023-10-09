import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/zapatillasSlice";
import { addCartItemsById } from "../../redux/cartSlice";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Image/Logo.png";
import styles from "./ZapatillaCard.module.css";

const ZapatillaCardK = ({ zapatilla }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.zapatillas);

  const isFavorite = favorites.some(
    (favorite) => favorite._id === zapatilla._id
  );
  const [isLiked, setIsLiked] = useState(isFavorite);

  const toggleLike = () => {
    if (isLiked) {
      dispatch(removeFavorite(zapatilla));
    } else {
      dispatch(addFavorite(zapatilla));
    }
    setIsLiked(!isLiked);
  };

  const addToCartHandler = () => {
    dispatch(addCartItemsById(zapatilla));
    Swal.fire({
      icon: "success",
      title: "Producto Agregado al Carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  };


      return (
        <NavLink
          key={zapatilla._id}
          to={`/detail/${zapatilla._id}`}
          className={`${styles.zapatilla} ${
            zapatilla.price < 90 ? styles.isPriceLessThan90 : ""
          }`}
        >
          <div className={styles.b}>
            <button
              className={styles.boton}
              onClick={(e) => {
                e.preventDefault();
                toggleLike();
              }}
            >
              <span role="img" aria-label="Corazón">
                {isLiked ? "❤️" : "🤍"}
              </span>
            </button>
          </div>
          <img src={zapatilla.image[0]?.src} alt={zapatilla.brand} />
          {/* <p>{zapatilla.stock[0]?.gender}</p> */}
          <div className={styles.name}>
            <h2>{zapatilla.brand}</h2>
            <div className={styles.price}>
              <p>$ {zapatilla.price}</p>
              <div></div>
            </div>
          </div>
          <p className={styles.type}>{zapatilla.model}</p>
          <p className={styles.type}>{zapatilla.type}</p>
          <p className={styles.circle}>
            🔴🟢🔵⚫️⚪️
            <img src={logo} alt="logo" width={70} />
          </p>
        </NavLink>
      );
// Retorna null si zapatilla o zapatilla._id no están definidos
};

ZapatillaCardK.propTypes = {
  zapatilla: PropTypes.shape({
    _id: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    stock: PropTypes.array.isRequired,
    model: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    color: PropTypes.array,
  }).isRequired,
};

export default ZapatillaCardK;
