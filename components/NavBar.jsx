import Link from "next/link";
import styles from "../styles/NavBar.module.css";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
const NavBar = () => {
  const [opneNav, setOpenNav] = useState(false);
  const mobileNavRef = useRef(null)
  const handleClickClose = () => {
    setOpenNav((p) => !p)
  }
  useEffect(() => {
    const handleclickoutside = (e) => {
      if (mobileNavRef.current && !mobileNavRef.current.contains(e.target)) {
        setOpenNav(false)
      }
    }
    document.addEventListener("mousedown", handleclickoutside);
    return () => {
      document.removeEventListener('mousedown', handleclickoutside)
    }
  }, [])
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.nav_left}>
          <ul className={styles.nav_links}>
            <li className={styles.nav_link}>
              <Link href="/">
                Home
              </Link>
            </li>
            <li className={styles.nav_link}>
              <Link href="/ourprofessionals">
                Our Professionals
              </Link>
            </li>
            <li className={styles.nav_link}>
              <Link href="/oursuites">
                Our Suites
              </Link>
            </li>
            <li className={styles.nav_link}>
              <Link href="/ourlocations">
                Locations
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.imageContainer}>
          <Link href="/">
            <Image
              className={styles.companImg}
              src={require("../public/companyImage.png")}
              alt="userImage"
            />
          </Link>
        </div>
        <div className={styles.nav_right}>
          <ul className={styles.nav_links}>
            <li className={styles.nav_link}>
              <Link href="/bookappointment">
                Book an Appointment
              </Link>
            </li>
            <li className={styles.nav_link}>
              <Link href="/Blogs">
                Blog
              </Link>
            </li>
            <li className={styles.nav_link}>
              <Link href="/contactus">
                Contact Us
              </Link>
            </li>
            <li className={styles.nav_link}>
              <Link href="/signup">
             Sign up
              </Link>
            </li>
            <li className={styles.nav_link}>
              <Link href="/login">
             Login
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.mobileNavigation}>
          <Bars3Icon onClick={handleClickClose} className={styles.barIcons} />
        </div>
      </nav>
      {opneNav && <div className={styles.mobileView}>
        <div ref={mobileNavRef} className={styles.mobiNavContainer}>
          <div className={styles.mobileImageContainer}>
            <Image src="/companyImage.png" alt="userImage" fill />
          </div>
          <div className={styles.mobileUl}>
            <ul>
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/ourprofessionals">
                <li>Our Professionals</li>
              </Link>
              <Link href="/oursuites">
                <li>Our Suites</li>
              </Link>
              <Link href="/ourlocations">
                <li>Locations</li>
              </Link>
              <Link href="/bookappointment">
                <li>Book an Appointment</li>
              </Link>
              <Link href="/Blogs">
                <li>Blog</li>
              </Link>
              <Link href="/contactus">
                <li>Contact Us</li>

              </Link>
              <Link href="/signup">
                <li>Sign up</li>
              </Link>
              <Link href="/login">
                <li>Login</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default NavBar;
