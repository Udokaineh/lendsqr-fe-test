import React from "react";
import styles from "./Container.module.scss";

interface PROPS {
  children: React.ReactNode;
  alt?: boolean;
}
export const Container: React.FC<PROPS> = ({ children, alt }) => {
  return (
    <div
      className={alt ? `${styles.container} ${styles.containerAlt}` : styles.container}
    >
      {children}
    </div>
  );
};
