import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useContext, useState } from "react";
import { CartContext } from "@/lib/CartContext";
import logo from "@/lib/assets/logo/SOG_LogoHalf.png";
import BarsIcon from "./icons/Bars";
import Image from "next/image";
import SearchIcon from "./icons/SearchIcon";

const StyledHeader = styled.header`
  background-color: #222;
  position: sticky;
  top: 0;
  z-index: 10;
`;
const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 5px;
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 3;
  img {
    width: 30px;
    height: 30px;
    @media screen and (min-width: 768px) {
      width: 40px;
      height: 40px;
    }
  }
  p {
    font-size: 1rem;
    @media screen and (min-width: 768px) {
      font-size: 1.4rem;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const StyledNav = styled.nav`
  ${(props) =>
    props.mobileNavActive
      ? `
  display: block;
  `
      : `
  display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    margin-top: 8px;
    position: static;
    padding: 0;
  }
`;
const NavLink = styled(Link)`
  display: block;
  color: #aaa;
  text-decoration: none;
  min-width: 30px;
  padding: 10px 0;
  svg {
    height: 20px;
  }
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
const NavButton = styled.button`
  background-color: transparent;
  display: flex;
  align-items: end;
  width: 40px;
  height: 40px;
  border: 0;
  color: #fff;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const SideIcons = styled.div`
  display: flex;
  align-items: end;
  @media screen and (min-width: 768px) {
    align-items: center;
  }
  a {
    display: inline-block;
    min-width: 20px;
    color: white;
    svg {
      margin-bottom: 4px;
      width: 16px;
      height: 16px;
      @media screen and (min-width: 768px) {
        margin-top: 10px;
      }
    }
  }
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>
            <Image src={logo} alt="Street of gadget logo" />
            <p>StreetOfGadgets</p>
          </Logo>

          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/products"}>All products</NavLink>
            <NavLink href={"/categories"}>Categories</NavLink>
            <NavLink href={"/account"}>Account</NavLink>
            <NavLink href={"/cart"}>Cart ({cartProducts.length})</NavLink>
          </StyledNav>
          <SideIcons>
            <Link href={"/search"}>
              <SearchIcon />
            </Link>
            <NavButton onClick={() => setMobileNavActive((prev) => !prev)}>
              <BarsIcon />
            </NavButton>
          </SideIcons>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
