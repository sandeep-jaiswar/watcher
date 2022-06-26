import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header() {
  const getHeaderMenuHtml = () => {
    const headerMenu = [
      {
        name: "Profile",
        path: "/profile",
        src: "https://img.icons8.com/stickers/100/000000/user-female-circle.png",
      },
      {
        name: "Wishlist",
        path: "/wishlist",
        src: "https://img.icons8.com/cotton/64/000000/like--v4.png",
      },
      {
        name: "Cart",
        path: "/cart",
        src: "https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-cart-essentials-icongeek26-flat-icongeek26.png",
      },
    ]
    return headerMenu.map((menu) => (
      <li className={styles["header__menu__list__item"]}>
        <NavLink
          to={menu.path}
          className={({ isActive }) =>
            isActive ? styles["active"] : undefined
          }
        >
          <img
            className={styles["header__menu__list__item__icon"]}
            alt={menu.name}
            src={menu.src}
          />
        </NavLink>
      </li>
    ))
  }
  return (
    <div className={styles["header"]}>
      <div className={styles["header__logo"]}>
        <img
          className={styles["header__logo__image"]}
          alt={"Logo"}
          src="https://img.icons8.com/external-febrian-hidayat-flat-febrian-hidayat/64/000000/external-hamburger-ui-essential-febrian-hidayat-flat-febrian-hidayat.png"
        />
      </div>
      <div className={styles["header__menu"]}>
        <ul className={styles["header__menu__list"]}>{getHeaderMenuHtml()}</ul>
      </div>
    </div>
  )
}