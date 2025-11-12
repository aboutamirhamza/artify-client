import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Loading from "../components/Loading/Loading";
import { useEffect, useState } from "react";

const HomeLayout = () => {
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

  const { state } = useNavigation();

  return (
    <div className={dark ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
      <header>
        <Navbar dark={dark} toggleDark={toggleDark} />
      </header>

      <main className="min-h-screen pt-20">
        {state === "loading" ? <Loading /> : <Outlet context={{ dark }}></Outlet>}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
