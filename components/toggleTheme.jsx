import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

import React, { useEffect, useState } from 'react';
const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    const { theme, setTheme } = useTheme();
    if (!mounted) return null;
    return (
        <button
            type="button"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className={`w-8 h-8 rounded-full p-2 transition-all duration-300 hover:cursor-pointer ${
                theme === 'dark'
                    ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
        >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
        </button>
    );
};

export default ThemeToggle;
