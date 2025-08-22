import React from 'react';
import logolws from "../assets/logo.svg"

const Header = ({setPage, page}) => {
    return (
        <header className="flex items-center mb-12 justify-between">
            <div className="flex items-center">
                <img src={logolws} className="h-10" />
            </div>
            <ul className="ml-4 text-sm text-zinc-400 flex gap-8">
                <a  className={`hover:text-zinc-200 font-medium ${page === "create" ? "text-zinc-200" : ""} cursor-pointer transition-all`}
                onClick={()=>setPage("create") }>Create Image</a>
                <a  className={`hover:text-zinc-200 font-medium ${page === "download" ? "text-zinc-200" : ""} cursor-pointer transition-all`} onClick={()=>setPage("download")}>Downloaded</a>
            </ul>
        </header>
    );
};

export default Header;