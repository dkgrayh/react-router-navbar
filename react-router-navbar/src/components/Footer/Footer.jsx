import './Footer.css';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer">
        <p>&copy; {currentYear} </p>
      </div>
    </footer>
  );
}
