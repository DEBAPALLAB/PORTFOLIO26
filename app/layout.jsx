// filename: app/layout.jsx
import './globals.css';
import Cursor from '../components/Cursor';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ScrollIndicator from '../components/ScrollIndicator';

export const metadata = {
  title: 'Dev — Software Engineer · Product Builder · Agency Founder',
  description: 'I translate vision into form, for builders who know what they want and dreamers still finding the words.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        <ScrollIndicator />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
