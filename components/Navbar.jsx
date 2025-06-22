import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar({ t }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(router.pathname);

  const tabs = [
    { path: "/", key: "navbar_home" },
    { path: "/grievance", key: "navbar_grievance" },
    { path: "/community", key: "navbar_stories" }
  ];

  const handleTabClick = (path) => {
    setActiveTab(path);
  };

  return (
    <nav className="bg-white shadow-md box-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" passHref>
              <div 
                className="hover:cursor-pointer text-3xl font-bold text-gray-800"
                onClick={() => handleTabClick("/")}
              >
                {t.navbar_head}
              </div>
            </Link>
            <div className="hover:cursor-pointer hidden md:ml-10 md:flex md:space-x-1">
              {tabs.map((tab) => (
                <Link href={tab.path} key={tab.path} passHref>
                  <div
                    className={`px-3 py-2 text-md  font-bold hover:cursor-pointer rounded-sm transition-colors ${
                      activeTab === tab.path
                        ? "bg-[#04AA6D] text-white"
                        : "text-gray-700 hover:bg-[#e6f7ef] hover:text-[#04AA6D]"
                    }`}
                    onClick={() => handleTabClick(tab.path)}
                  >
                    {t[tab.key]}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}