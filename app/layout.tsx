import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/modals/RegisterModal';
import Navbar from './components/navbar/Navbar';
import './globals.css';
import { Nunito } from 'next/font/google';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';
import RentModal from './components/modals/RentModal';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
};

const font = Nunito({
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang='en'>
      <body className={font.className}>
        {/* ClientOnly component prevents to get an hydration error thats why we wrap it around other client components */}
        <ClientOnly>
          <ToasterProvider />
          <Navbar currentUser={currentUser} />
          <RegisterModal />
          <LoginModal />
          <RentModal />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
