import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useContext, useState } from "react";
import { CartContext } from "@/lib/CartContext";
import { useRouter } from "next/router";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import { NavbarLinks, activeNavLink, inactiveNavLink } from "./Links";

const StyledHeader = styled.header`
  background-color: #222;
`;
const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const StyledNav = styled.nav`
  display: flex;
`;
const NavLink = styled(Link)`
  color: #aaa;
  text-decoration: none;
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { pathname } = router;
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>Besac Ecommerce</Logo>

          <StyledNav>
            <div
              className="dropdown text-3xl sm:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <MdMenuOpen className="icon text-white" />
              ) : (
                <MdMenu className="icon text-white" />
              )}
            </div>
            <div
              className={open ? "mobileNavbar" : "desktopNavbar sm:space-x-4"}
            >
              {NavbarLinks.map((data, index) => {
                if (index !== 3) {
                  return (
                    <NavLink
                      href={data.path}
                      key={data.path}
                      className={
                        pathname == data.path ? activeNavLink : inactiveNavLink
                      }
                    >
                      {data.text}
                    </NavLink>
                  );
                } else {
                  return (
                    <NavLink
                      href={data.path}
                      key={data.path}
                      className={
                        pathname == data.path ? activeNavLink : inactiveNavLink
                      }
                    >
                      {`${data.text} (${cartProducts.length})`}
                    </NavLink>
                  );
                }
              })}
            </div>
          </StyledNav>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
