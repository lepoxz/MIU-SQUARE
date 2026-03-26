export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {year} MIU SQUARE. Automation-first growth operations.</p>
      </div>
    </footer>
  );
}
