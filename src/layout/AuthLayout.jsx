import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import Aos from "aos";
import "aos/dist/aos.css";
const AuthLayout = () => {

    const [dark, setDark] = useState(false);
    
      useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
          setDark(true);
          document.documentElement.classList.add("dark");
        } else {
          setDark(false);
          document.documentElement.classList.remove("dark");
        }
      }, []);

      useEffect(() => {
          Aos.init({
            duration: 800,
            once: true,
            easing: "ease-in-out",
          });
        }, []);
      
        useEffect(() => {
          const timeout = setTimeout(() => {
            Aos.refresh();
          }, 300);
          return () => clearTimeout(timeout);
        }, [dark]);
    
      const toggleDark = () => {
        const newTheme = !dark;
        setDark(newTheme);
        localStorage.setItem("theme", newTheme ? "dark" : "light");
    
        if (newTheme) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      };

    return (
        <div className={dark ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
            <header>
                <Navbar dark={dark} toggleDark={toggleDark}></Navbar>
            </header>

            <main>
                <Outlet context={{ dark }}></Outlet>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;