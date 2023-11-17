export const inactiveNavLink =
  "flex font-thin text-xs sm:text-base lg:text-lg hover:underline ml-2 capitalize";
export const activeNavLink = `${inactiveNavLink} bg-highlight text-white`;
export const inactiveLink =
  "flex font-thin text-xs lg:text-base hover:underline ml-2";
export const activeLink = `${inactiveLink} bg-highlight text-gray-800`;

export const NavbarLinks = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Categories",
    path: "/categories",
  },
  {
    text: "Account",
    path: "/account",
  },
  {
    text: "Cart",
    path: "/cart",
  },
];
