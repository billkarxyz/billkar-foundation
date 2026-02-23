import { useState } from "react";

const services = [
  {
    title: "Frontend Development",
    desc: "Building responsive and interactive user interfaces using modern frameworks like React.",
    icon: "🖥️",
  },
  {
    title: "Backend Development",
    desc: "Designing scalable backend systems using Node.js, Express, and PostgreSQL.",
    icon: "⚙️",
  },
  {
    title: "Mobile Development",
    desc: "Creating cross-platform mobile apps using React Native for Android and iOS.",
    icon: "📱",
  },
  {
    title: "API Development",
    desc: "Creating efficient RESTful APIs for seamless integration between systems.",
    icon: "🔗",
  },
  {
    title: "Database Optimization",
    desc: "Optimizing database queries and architecture for maximum performance and scalability.",
    icon: "🗄️",
  },
  {
    title: "DevOps & Deployment",
    desc: "Automating CI/CD pipelines and deploying applications on cloud infrastructure.",
    icon: "🚀",
  },
];

const navLinks = ["About", "Projects", "Resume"];

export default function Portfolio() {
  const [activeNav, setActiveNav] = useState("About");

  return (
    <div style={styles.page}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div style={styles.avatarWrapper}>
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Abill Akbar"
            style={styles.avatar}
          />
        </div>

        <h2 style={styles.name}>
          <span style={styles.nameHighlight}>Abill</span> Akbar
        </h2>
        <p style={styles.tagline}>Tech enthusiast | Crypto enthusiast</p>

        <a href="#" style={styles.resumeBtn}>
          Download Resume
        </a>

        <div style={styles.navSection}>
          <p style={styles.navTitle}>Quick Links</p>
          {navLinks.map((link) => (
            <div
              key={link}
              onClick={() => setActiveNav(link)}
              style={{
                ...styles.navItem,
                ...(activeNav === link ? styles.navItemActive : {}),
              }}
            >
              {link}
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main style={styles.main}>
        {/* About Section */}
        <section style={styles.section}>
          <h1 style={styles.sectionTitle}>About</h1>
          <p style={styles.aboutText}>
            Hi, I'm Abill Akbar. Passionate about technology, creativity, and
            building meaningful digital projects. Always learning, always
            growing.
          </p>
        </section>

        {/* What I'm Doing */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>What I'm Doing</h2>
          <div style={styles.cardGrid}>
            {services.map((service) => (
              <div key={service.title} style={styles.card}>
                <div style={styles.cardIcon}>{service.icon}</div>
                <h3 style={styles.cardTitle}>{service.title}</h3>
                <p style={styles.cardDesc}>{service.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    minHeight: "100vh",
    background: "#e8eef5",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  sidebar: {
    width: "280px",
    minWidth: "280px",
    background: "#dde5ef",
    padding: "40px 24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRight: "1px solid #c8d5e8",
    position: "sticky",
    top: 0,
    height: "100vh",
    overflowY: "auto",
  },
  avatarWrapper: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    overflow: "hidden",
    border: "3px solid #fff",
    boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
    marginBottom: "16px",
  },
  avatar: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  name: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#1a1a2e",
    margin: "0 0 6px 0",
    textAlign: "center",
  },
  nameHighlight: {
    color: "#3b82f6",
  },
  tagline: {
    fontSize: "13px",
    color: "#555",
    textAlign: "center",
    margin: "0 0 24px 0",
  },
  resumeBtn: {
    display: "block",
    background: "#3b82f6",
    color: "#fff",
    padding: "12px 28px",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "14px",
    marginBottom: "36px",
    transition: "background 0.2s",
    cursor: "pointer",
  },
  navSection: {
    width: "100%",
  },
  navTitle: {
    fontWeight: "700",
    fontSize: "14px",
    color: "#1a1a2e",
    marginBottom: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
  navItem: {
    padding: "10px 14px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "15px",
    color: "#444",
    marginBottom: "4px",
    transition: "background 0.2s",
  },
  navItemActive: {
    background: "#fff",
    color: "#3b82f6",
    fontWeight: "600",
  },
  main: {
    flex: 1,
    padding: "48px 56px",
    overflowY: "auto",
  },
  section: {
    marginBottom: "48px",
  },
  sectionTitle: {
    fontSize: "32px",
    fontWeight: "800",
    color: "#1a1a2e",
    margin: "0 0 16px 0",
  },
  aboutText: {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.7",
    maxWidth: "680px",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    marginTop: "8px",
  },
  card: {
    background: "#fff",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "default",
  },
  cardIcon: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  cardTitle: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#1a1a2e",
    margin: "0 0 8px 0",
  },
  cardDesc: {
    fontSize: "14px",
    color: "#666",
    lineHeight: "1.6",
    margin: 0,
  },
};
