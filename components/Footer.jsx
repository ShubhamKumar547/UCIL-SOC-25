import React from "react";
import Link from "next/link";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { useRouter } from "next/router";
import en from "../public/locales/en/footer.json";
import hi from "../public/locales/hi/footer.json";

const translations = { en, hi };

const Footer = () => {
  const { locale } = useRouter();
  const t = translations[locale] || translations.en;

  return (
    <footer className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Link href="/" className="group">
                <span className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 group-hover:text-[#676867] dark:group-hover:text-[#f3f5f4] transition-colors duration-200">
                  {t.site_name}
                </span>
              </Link>
            </div>
            <p className="text-gray-500 dark:text-gray-300">
              {t.footer_tagline}
            </p>
            <div className="flex space-x-4 mt-2">
              <a
                href="#"
                className="text-gray-400 hover:text-[#04AA6D] dark:hover:text-[#04AA6D] transition-colors"
                aria-label="Facebook"
              >
                <BsFacebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#04AA6D] dark:hover:text-[#04AA6D] transition-colors"
                aria-label="Twitter"
              >
                <BsTwitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#04AA6D] dark:hover:text-[#04AA6D] transition-colors"
                aria-label="Instagram"
              >
                <BsInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              {t.footer_quick_links}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#04AA6D] dark:hover:text-[#04AA6D] transition-colors"
                >
                  {t.footer_home}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#04AA6D] dark:hover:text-[#04AA6D] transition-colors"
                >
                  {t.footer_about_ucil}
                </Link>
              </li>
              <li>
                <Link
                  href="/rights"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#04AA6D] dark:hover:text-[#04AA6D] transition-colors"
                >
                  {t.footer_rights}
                </Link>
              </li>
              <li>
                <Link
                  href="/impact"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#04AA6D] dark:hover:text-[#04AA6D] transition-colors"
                >
                  {t.footer_environmental_impact}
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#04AA6D] dark:hover:text-[#04AA6D] transition-colors"
                >
                  {t.footer_news}
                </Link>
              </li>
              <li>
                <Link
                  href="/grievance"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#04AA6D] dark:hover:text-[#04AA6D] transition-colors"
                >
                  {t.footer_grievance_tool}
                </Link>
              </li>
              <li>
                <Link
                  href="/story"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#04AA6D] dark:hover:text-[#04AA6D] transition-colors"
                >
                  {t.footer_story_microsite}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              {t.footer_resources}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#04AA6D] dark:hover:text-[#04AA6D] transition-colors"
                >
                  {t.footer_about}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#04AA6D] dark:hover:text-[#04AA6D] transition-colors"
                >
                  {t.footer_privacy}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#04AA6D] dark:hover:text-[#04AA6D] transition-colors"
                >
                  {t.footer_terms}
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#04AA6D] dark:hover:text-[#04AA6D] transition-colors"
                >
                  {t.footer_faq}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#04AA6D] dark:hover:text-[#04AA6D] transition-colors"
                >
                  {t.footer_contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              {t.footer_gov_resources}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://cpcb.nic.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#04AA6D] dark:hover:text-[#04AA6D] transition-colors"
                >
                  {t.footer_cpcb}
                </a>
              </li>
              <li>
                <a
                  href="http://www.nwic.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#04AA6D] dark:hover:text-[#04AA6D] transition-colors"
                >
                  {t.footer_nwic}
                </a>
              </li>
              <li>
                <a
                  href="https://swachhbharat.mygov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#04AA6D] dark:hover:text-[#04AA6D] transition-colors"
                >
                  {t.footer_swachh}
                </a>
              </li>
              <li>
                <a
                  href="https://www.india-wris.nrsc.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-[#04AA6D] dark:hover:text-[#04AA6D] transition-colors"
                >
                  {t.footer_wris}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-10 pt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {t.site_name}. {t.footer_rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
