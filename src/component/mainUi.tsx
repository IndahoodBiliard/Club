import React, {FC, ReactNode } from 'react';

interface MainUiProps {
  children: ReactNode;
}
const  MainUi:FC<MainUiProps> = ({ children }) => {
  return (
    <div className="main-ui">
      <header>
        {/* Đặt nội dung header ở đây */}
        <h1>Header</h1>
      </header>
      <main>
        {/* Hiển thị nội dung của children */}
        {children}
      </main>
      <footer>
        {/* Đặt nội dung footer ở đây */}
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default MainUi;