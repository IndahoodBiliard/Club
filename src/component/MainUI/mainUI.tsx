import React, { FC, ReactNode } from 'react';
import styles from './mainUI.module.scss'
import Header from './header/header';


interface MainUiProps {
  children: ReactNode;
  headerType?: 'black';
  footer?: boolean
}

const  MainUi: FC<MainUiProps> = ({ children, footer, headerType}) =>{
  return (
    <div className={styles.main_ui}>
      <Header headerType={headerType}/>
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