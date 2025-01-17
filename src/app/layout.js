import "./globals.css";
// import '../output.css';
import Nav from '@/components/nav';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Footer from '@/components/footer';
config.autoAddCss = false

export const metadata = {
  title: "World Mental Health Conference & Retreat 2025",
  description: "Wolrd Mental Health Conference is a event that brings together mental health professionals, researchers, and advocates to discuss the latest trends in mental health care.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
    <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
        <Nav/>
        {children}
        </div>
        <Footer/>
    </div>
    </body>
    </html>
  );
}
