import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Nav() {
  return (
    <header className="nav-header">
      <div className="nav-div">
        {/* Logo */}
        <div className="logo mb-4 lg:mb-0 flex justify-center">
          <Link href="/">
            <img src="./image/logo.png" alt="Logo" className="h-24" />
          </Link>
        </div>
        {/* Navigation Menu */}
        <nav
          id="menu"
          className="flex flex-nowrap justify-center items-center space-x-4"
        >
          <Link href="/" className="nav-home">
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <Link href="/schedule" className="nav-link">Schedule</Link>
          <Link href="/speakers" className="nav-link">Speakers</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
          <Link href="/tickets">
            <button className="ticket-btn ">
              Ticket
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}