import { PropsWithChildren } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-white via-slate-50 to-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-8 lg:py-12">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
