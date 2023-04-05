import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/modals/RegisterModal';
import Navbar from './components/navbar/Navbar';
import './globals.css';
import { Nunito } from 'next/font/google';
import ToasterProvider from './providers/ToasterProvider';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
};

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        {/* ClientOnly component prevents to get an hydration error thats why we wrap it around other client components */}
        <ClientOnly>
          <ToasterProvider />
          <Navbar />
          <RegisterModal />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
