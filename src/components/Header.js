import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false;
  };

  const [dark, setDark] = useState(getMode());

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark));
  }, [dark]);

  const themeChangeHandler = () => {
    setDark(!dark);
  };

  return (
    <div className={dark ? "app dark-mode" : "app"}>
      <header className={dark ? "app dark-mode" : "app"}>
        <h3>Blog</h3>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="post">CreatePost</Link>
            </li>
          </ul>
          <div>
            <div className="nav">
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={themeChangeHandler}
                  checked={dark}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </nav>
      </header>

      <main className="App">
        <Outlet />
      </main>
    </div>
  );
};

export default Header;
