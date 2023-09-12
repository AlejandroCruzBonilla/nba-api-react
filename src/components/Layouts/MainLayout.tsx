import { FC } from 'react';
import Nav from '../Nav/Nav';
import { MainLayoutProps } from './interfaces';

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Nav />
      <main className={`flex  flex-col items-center w-full p-4`}>
        {children}
      </main>
    </>
  );
};

export default MainLayout;
