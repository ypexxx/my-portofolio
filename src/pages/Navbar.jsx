import React, { useState, useEffect } from "react";
import {} from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");

    const navItems = [
        { href: "#Home", label: "Home" },
        { href: "#About", label: "About" },
        { href: "#Portofolio", label: "Portofolio" },
        { href: "#Contact", label: "Contact" },
    ];

    const scrollToSection = (e, href) => {
        e.preventDevault();
        const section = document.querySelector(href);
        if(section) {
            const top = section.offsetTop - 100;
            window.scrollTo({
                top: top,
                behavior: "smooth"
            });
        }
        setIsOpen(false);
    }

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${isOpen ? "bg-black/10 opacity-100" : scrolled ? "bg-black/5 backdrop-blur-xl" : "bg-transparent"}`}>
            <div className="hidden md:block">
                <div className="ml-8 flex items-center space-x-8">
                    {navItems.map((item) => (
                        <a key={item.label} href={item.href} onClick={(e) => scrollToSection(e, item.href)} className="group relative px-1 py-2 text-sm font-medium">
                            <span className={`relative z-10 transition-colors duration-300 ${activeSection === item.href.substring(1) ? "text-black font-semibold" : "text-black/50 group-hover:text-black/30"}`}>{item.label}</span>
                            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-black/20 transform origin-left transition-transform duration-300 ${activeSection === item.href.substring(1) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;