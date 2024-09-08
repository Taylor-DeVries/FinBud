"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaHome, FaCog, FaUserCircle } from "react-icons/fa";
import styles from "./navbar.module.css";

export default function NavbarComponent() {
  return (
    <Navbar className={styles["navbar-custom"]} data-bs-theme="light">
      <Container fluid>
        <Nav className="me-auto">
          <Nav.Link href="/" className={styles["navbar-icon"]}>
            <FaHome size={28} />
          </Nav.Link>
          <Nav.Link href="/settingsPage" className={styles["navbar-icon"]}>
            <FaCog size={25} />
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/tips" className={styles["navbar-profile-text"]}>
            Tips
          </Nav.Link>
          <Nav.Link
            href="/characters"
            className={styles["navbar-profile-text"]}
          >
            Characters
          </Nav.Link>
        </Nav>{" "}
        <Nav className={styles["navbar-profile"]}>
          <Nav.Link href="/profile">
            <FaUserCircle size={30} />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
