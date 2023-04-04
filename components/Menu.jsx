import React from "react";
import styles from "@/styles/Menu.module.css";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 11 },
  { id: 3, name: "Running shoes", doc_count: 11 },
  { id: 4, name: "Football shoes", doc_count: 11 },
];

const Menu = ({ showCatMenu, setShowCatMenu, setMobileMenu, mobilewMenu }) => {
  return (
    <ul className={styles.menu} style={{left: mobilewMenu? '0': '' }}>
      {data?.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {item?.subMenu ? (
              <li
                className={styles.subcatgory}
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
              >
                {item?.name}
                <BsChevronDown size={14} />
                <ul >
                  {showCatMenu &&
                    subMenuData?.map((subCat) => {
                      return <li key={subCat.id}><Link href={`/category/sneakers`}>{subCat.name} </Link><span>{subCat.doc_count}</span></li>;
                    })}
                </ul>
              </li>
            ) : (
              <li onClick={()=>setMobileMenu(false)}>
                <Link href={item?.url}>{item?.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
