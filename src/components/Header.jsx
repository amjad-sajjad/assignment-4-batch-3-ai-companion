import React from 'react';

const Header = () => {
    return (
        <header className="flex items-center mb-12 justify-between">
            <div className="flex items-center">
                <img src="./assets/logo.svg" className="h-10" />
            </div>
            <ul className="ml-4 text-sm text-zinc-400 flex gap-8">
                <a href="./index.html" className="hover:text-zinc-200 font-medium text-zinc-200 cursor-pointer transition-all">Create Image</a>
                <a href="./downloaded.html" className="hover:text-zinc-200 cursor-pointer transition-all">Downloaded</a>
            </ul>
        </header>
    );
};

export default Header;