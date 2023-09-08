import React, { FC, ReactNode } from 'react';
import styles from './mainUI.module.scss'
import Header from './header/header';


interface MainUiProps {
  children: ReactNode;
}

const  MainUi: FC<MainUiProps> = ({ children }) =>{
  return (
    <div className={styles.main_ui}>
      <Header/>
      <main className={styles.main}>
        {children}
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default MainUi;