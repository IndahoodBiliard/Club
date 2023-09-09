import React, { FC, ReactNode } from 'react';
import styles from './mainUI.module.scss'
import Header from './header/header';


interface MainUiProps {
  children: ReactNode;
  footer?: boolean
}

const  MainUi: FC<MainUiProps> = ({ children, footer }) =>{
  return (
    <div className={styles.main_ui}>
      <Header/>
      <main className={styles.main}>
        {children}
      </main>
      {footer && <footer>
        <p>Footer</p>
      </footer>}
    </div>
  );
}

export default MainUi;