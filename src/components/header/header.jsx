import "./header.css";

function Header() {
  return <div className="header" style={{
    display: 'flex',
    alignItems: 'center',
  }}>
    <img src="public\logo.svg"style={{
      padding: '0 10% 0 40px'
    }}/>
    <div className="navContainer">
      <button className="navContainerBtn">THE STUDIO</button>
      <button className="navContainerBtn">PROJECTS</button>
      <button className="navContainerBtn">ARCHITECTURE</button>
      <button className="navContainerBtn">BLOG</button>
    </div>
    <button className="contactBtn">CONTACT</button>
  </div>;
}

export default Header;
