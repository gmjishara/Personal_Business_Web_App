"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./style.module.css";

export function Navigation({ navLinks }) {
  const pathname = usePathname();

  return (
    <>
      <div className={styles.navMain}>
        <div>Gmjishara</div>
        <div className={styles.navbar}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                className={isActive ? styles.textBlue : styles.textBlack}
                href={link.href}
                key={link.id}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
