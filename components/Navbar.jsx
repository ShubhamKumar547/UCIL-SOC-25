import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./toggleTheme";

export default function Navbar({ t }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(router.pathname);
  const [mobileOpen, setMobileOpen] = useState(false);

  const tabs = [
    { path: "/", key: "navbar_home" },
    { path: "/grievance", key: "navbar_grievance" },
    { path: "/community", key: "navbar_stories" },
  ];

  const handleTabClick = (path) => {
    setActiveTab(path);
    setMobileOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Left side: Logo + Links */}
          <div className="flex items-center space-x-6">
            <Link href="/" passHref>
              <div
                className="text-3xl font-bold text-gray-800 dark:text-gray-100 cursor-pointer"
                onClick={() => handleTabClick("/")}
              >
                {t.navbar_head}
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex md:space-x-4">
              {tabs.map((tab) => (
                <Link href={tab.path} key={tab.path} passHref>
                  <div
                    className={`px-3 py-2 rounded-sm font-bold transition-colors cursor-pointer ${
                      activeTab === tab.path
                        ? "bg-[#04AA6D] text-white dark:bg-[#04AA6D] dark:text-white"
                        : "text-gray-700 hover:bg-[#e6f7ef] hover:text-[#04AA6D] dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-[#04AA6D]"
                    }`}
                    onClick={() => handleTabClick(tab.path)}
                  >
                    {t[tab.key]}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right side: Language + Theme + Hamburger */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {tabs.map((tab) => (
              <Link href={tab.path} key={tab.path} passHref>
                <div
                  className={`block px-3 py-2 rounded-md font-bold transition-colors cursor-pointer ${
                    activeTab === tab.path
                      ? "bg-[#04AA6D] text-white"
                      : "text-gray-700 hover:bg-[#e6f7ef] hover:text-[#04AA6D] dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-[#04AA6D]"
                  }`}
                  onClick={() => handleTabClick(tab.path)}
                >
                  {t[tab.key]}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
