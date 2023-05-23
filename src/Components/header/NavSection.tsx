import { BsBagCheck } from "react-icons/bs";
import { VscHeart, VscHeartFilled, VscMenu, VscClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../../features/menu/menuSlice";
import { toggleFavourite } from "../../features/favourites/favouriteSlice";
import LiNavLinkComp from "./LiNavLinkComp";

export default function NavSection() {
  const { isMenuPressed } = useSelector((state: any) => state.menu);
  const { isFavourite } = useSelector((state: any) => state.favourite);

  const dispatch = useDispatch();

  const menuPressedFn = () => dispatch(toggleMenu());
  const isFavouriteFn = () => dispatch(toggleFavourite());

  return (
    <div className="nav-section-div-style">
      <button onClick={menuPressedFn} className="text-xl text-gray-500 hover:text-white md:hidden">
        {isMenuPressed ? <VscClose /> : <VscMenu />}
      </button>

      <div className="w-[285px] flex items-center justify-between">
        <div className="flex">
          <ul className="flex">
            <LiNavLinkComp
              path={"auth/login"}
              text="login"
              className="px-1"
            />
            <LiNavLinkComp
              path={"auth/register"}
              text="register"
              className="px-1"
            />
            <LiNavLinkComp
              path={"plans/favourites"}
              text="favourites"
              className="px-1"
            />
          </ul>
          <button onClick={isFavouriteFn} className="pl-1 text-sm">
            {isFavourite ? (
              <VscHeartFilled className="text-red-700" />
            ) : (
              <VscHeart />
            )}
          </button>
        </div>

        <Link to={"cart"} className="cart-link-style">
          <span className="mr-1">
            <BsBagCheck />
          </span>
          <span>{0} item</span>
        </Link>
      </div>
    </div>
  );
}
