import styles from "@/styles/Header.module.css";
import Link from "next/link";
import { useState } from "react";
import Menu from "./Menu";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

const Header = () => {
  const [mobilewMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);

  return (
    <header className={styles.header}>
      <Link href="/">
        <img src="/logo.svg" alt="" />{" "}
      </Link>

      <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} setMobileMenu={setMobileMenu} mobilewMenu={mobilewMenu}/>

      <div className={styles.menu_icons}>
        
        <div className={styles.wish}><Link href='/wish'><IoMdHeartEmpty className={styles.wish_icon}  /><sup>0</sup></Link></div>

        <div className={styles.cart}>
         <Link href='/cart'> <BsCart className={styles.cart_icon}/> <sup>0</sup></Link>
        </div>

        <div className={styles.humbarg_menu} onClick={()=>setMobileMenu(!mobilewMenu)}>
        {mobilewMenu ?  <VscChromeClose />: <BiMenuAltRight />}
      </div>

      </div>

      
    </header>
  );
};

export default Header;
