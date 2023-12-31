import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header/Header';
import Container from 'components/Container/Container';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Container>
            <Outlet />
          </Container>
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
