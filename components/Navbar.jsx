import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar({ t }) {
  return (
    <nav className="bg-white shadow-md box-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="hover:cursor-pointer text-3xl font-bold text-gray-800">
              {t.navbar_head}
            </div>
            <div className="hover:cursor-pointer hidden md:ml-10 md:flex md:space-x-8">
              <div className="text-gray-700 hover:text-blue-600 px-3 py-2 text-xl font-medium hover:cursor-pointer">
                {t.navbar_home}
              </div>
              <div className="text-gray-700 hover:text-blue-600 px-3 py-2 text-xl font-medium hover:cursor-pointer">
                {t.navbar_grienvance}
              </div>
              <div className="text-gray-700 hover:text-blue-600 px-3 py-2 text-xl font-medium hover:cursor-pointer">
                {t.navbar_stories}
              </div>
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
