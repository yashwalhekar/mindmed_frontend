import { NavLink, useLocation, Outlet } from "react-router-dom";
import { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import productsData from "../../utils/productsData";
import { Box } from "@mui/material";

export default function Products() {
  const location = useLocation();
  const [isOpenNavLinks, setIsOpenNavLinks] = useState(false);

  // Ref for user menu
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => setIsOpenNavLinks(false));

  // Toggle navigation links
  const toggleNavLinks = () => {
    setIsOpenNavLinks(!isOpenNavLinks);
  };

  return (
    <Box className="p-5 bg-white">
      <h2 className="text-2xl font-bold mb-4">Products</h2>

      {/* Dynamic Navigation */}
      <div className="flex gap-4 mb-5 border-b pb-3">
        {productsData.map((product, index) => (
          <NavLink
            to={product.path}
            key={product.id}
            className={({ isActive }) => {
              const isProductsPage = location.pathname === "/products";
              const isFirstProductActive =
                isProductsPage && index === 0 ? true : isActive;

              return `font-semibold h-full flex items-center transition-colors duration-300 ease-in-out ${
                isFirstProductActive
                  ? "text-ternary border-b-4 border-ternary font-bold"
                  : "text-gray-500 border-b-4 border-transparent hover:border-secondary hover:text-secondary"
              }`;
            }}
          >
            {product.title}
          </NavLink>
        ))}
      </div>

      {/* Nested Routes Render Here */}
      <Outlet />
    </Box>
  );
}
