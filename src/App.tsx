import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <header className="navbar">
        <h1>FAFOXRPL</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h2>Welcome to FAFOXRPL</h2>
        <p>Building something great on the XRP Ledger.</p>
      </section>

      <section id="about" className="section">
        <h2>About</h2>
        <p>This is a blockchain-powered project using React + Rsbuild.</p>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <ul>
          <li>Wallet integration (Coming soon)</li>
          <li>NFT Showcase</li>
          <li>Community Tools</li>
        </ul>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Reach out via email or join our XRPL community.</p>
      </section>

      <footer className="footer">
        <p>&copy; 2025 FAFOXRPL. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
