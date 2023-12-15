import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const MegaMenu = () => {
  const [navigationMenuOpen, setNavigationMenuOpen] = useState(false);
  const [navigationMenu, setNavigationMenu] = useState("");
  const navigationMenuCloseTimeout = useRef(null);
  const navigationDropdownRef = useRef(null);

  const navigationMenuLeave = () => {
    navigationMenuCloseTimeout.current = setTimeout(() => {
      setNavigationMenuOpen(false);
      setNavigationMenu("");
    }, 200);
  };

  const navigationMenuReposition = (navElement) => {
    navigationMenuClearCloseTimeout();
    if (navigationDropdownRef.current) {
      navigationDropdownRef.current.style.left = navElement.offsetLeft + "px";
      navigationDropdownRef.current.style.marginLeft =
        navElement.offsetWidth / 2 + "px";
    }
  };

  const navigationMenuClearCloseTimeout = () => {
    clearTimeout(navigationMenuCloseTimeout.current);
  };

  const navigationMenuClose = () => {
    setNavigationMenuOpen(false);
    setNavigationMenu("");
  };

  const handleMouseOver = (event) => {
    setNavigationMenuOpen(true);
    navigationMenuReposition(event.currentTarget);
    setNavigationMenu(event.currentTarget.getAttribute("data-menu"));
  };

  const handleMouseLeave = () => {
    navigationMenuLeave();
  };

  useEffect(() => {
    const handleDropdownMouseOver = () => {
      navigationMenuClearCloseTimeout();
    };

    const handleDropdownMouseLeave = () => {
      navigationMenuLeave();
    };

    const dropdownElement = navigationDropdownRef.current;

    if (dropdownElement) {
      dropdownElement.addEventListener("mouseover", handleDropdownMouseOver);
      dropdownElement.addEventListener("mouseleave", handleDropdownMouseLeave);
    }

    return () => {
      if (dropdownElement) {
        dropdownElement.removeEventListener(
          "mouseover",
          handleDropdownMouseOver
        );
        dropdownElement.removeEventListener(
          "mouseleave",
          handleDropdownMouseLeave
        );
      }
    };
  }, []);

  return (
    <div>
      <nav className="relative z-10 w-auto">
        <div className="relative">
          <ul className="flex items-center justify-center flex-1 p-1 space-x-1 list-none text-neutral-700 group border-neutral-200/80">
            <li
              className="md:mr-8 lg:my-0 my-7 font-medium"
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
              data-menu="getting-started"
            >
              <NavLink
                to={"/"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#00B207] flex justify-center items-center font-semibold "
                    : "text-[#999999] flex justify-center items-center"
                }
              >
                Home
                {navigationMenuOpen && navigationMenu === "getting-started" ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          ref={navigationDropdownRef}
          className={`absolute top-0 pt-3 duration-200 ease-out -translate-x-1/2 translate-y-11 ${
            navigationMenuOpen ? "" : "hidden"
          }`}
        >
          {navigationMenu === "getting-started" && (
            <div className="w-[400px] relative p-6 left-[100px] rounded bg-[rgba(251,251,251)]">
              <ul className="grid grid-cols-2">
                <li
                  onClick={() => navigationMenuClose()}
                  className="block px-3.5 py-3 text-sm rounded hover:bg-gray-100"
                >
                  <NavLink
                    to={"/sign-up"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? " text-[#00B207] font-semibold "
                        : "text-[#999999]"
                    }
                  >
                    Create Account
                  </NavLink>
                </li>
                <li
                  onClick={() => navigationMenuClose()}
                  className="block px-3.5 py-3 text-sm rounded hover:bg-gray-200"
                >
                  <NavLink
                    to={"categories"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? " text-[#00B207] font-semibold "
                        : "text-[#999999]"
                    }
                  >
                    Categories
                  </NavLink>
                </li>
                <li
                  onClick={() => navigationMenuClose()}
                  className="block px-3.5 py-3 text-sm rounded hover:bg-gray-200"
                >
                  <NavLink
                    to={"/account"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? " text-[#00B207] font-semibold "
                        : "text-[#999999]"
                    }
                  >
                    Account
                  </NavLink>
                </li>
                <li
                  onClick={() => navigationMenuClose()}
                  className="block px-3.5 py-3 text-sm rounded hover:bg-gray-200"
                >
                  <NavLink
                    to={"/dashboard"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? " text-[#00B207] font-semibold "
                        : "text-[#999999]"
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default MegaMenu;
