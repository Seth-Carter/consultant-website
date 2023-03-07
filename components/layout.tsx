import { PropsWithChildren } from 'react';
import Nav from './nav';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Nav />
        {children}
      </div>
    </>
  );
}
