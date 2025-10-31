import { useEffect, useState } from "react"

function Header() {

  type NavItem = { label: string; id: string };
  const navItems: NavItem[] = [
    { label: "Home", id: "home" },
    { label: "About", id: "about-container" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? "solid" : "transparent"}`} style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 100, transition: "all 0.4s ease", }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: scrolled ? "space-between" : "center", padding: "1.2rem 2rem", transition: "all 0.4s ease", }} >
        {scrolled && (<div style={{ fontWeight: 600, fontSize: "1rem", letterSpacing: "-0.03em", transition: "opacity 0.4s ease, transform 0.4s ease", opacity: 1, transform: "translateY(0)", color: "inherit", }} >
            elissabj | Software Engineer
          </div>
        )}
        <nav
          style={{
            display: "flex",
            gap: "1.5rem",
            fontSize: "0.9rem",
            fontWeight: 500,
            textAlign: "center",
            transition: "all 0.4s ease",
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                color: "inherit",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) =>
                ((e.target as HTMLElement).style.color = "#b4cdf9ff")
              }
              onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) =>
                ((e.target as HTMLElement).style.color = scrolled ? "var(--text-color)" : "white")
              }
            >
              {item.label.toUpperCase()}
            </a>
          ))}
        </nav>

      </div>
    </header>
  )
}

export default Header