import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../foto/logo_black.png';
import instagram from '../foto/ig.png';
import twitter from '../foto/twitter.png';
import youtube from '../foto/youtube.png';
import "./Footer.css";

function Footer() {
    const toTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="footer_container container px-5 pb-8 mx-auto text-gray-600 body-font flex items-center sm:flex-row flex-col">
            <Link
                to="/"
                className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
                onClick={toTop}
            >
                <img src={logo2} alt="Your Logo" className="w-50 h-10 rounded-half p-2" />
            </Link>
            <p className="textLL text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-1">© 2023 Website Judi —
                <a
                    className="textLL text-gray-600 ml-1"
                    href="https://www.instagram.com/universitasmultimedianusantara/"
                >
                    @OfficialKicksAtrium
                </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a
                    className="LogoLL flex justify-center mx-1 w-7 h-7"
                    href="https://www.youtube.com/@VALORANTEsportsEMEA"
                    target='_blank'
                    rel="noopener noreferrer"
                >
                    <img src={youtube} alt="youtube-icon" />
                </a>
                <a
                    className="LogoLL flex justify-center mx-1 w-7 h-7"
                    href="https://www.instagram.com/valorantid/"
                    target='_blank'
                    rel="noopener noreferrer"
                >
                    <img src={instagram} alt="instagram-icon" />
                </a>
                <a
                    className="LogoLL flex justify-center mx-1 w-7 h-7"
                    href="https://twitter.com/PlayVALORANT"
                    target='_blank'
                    rel="noopener noreferrer"
                >
                    <img src={twitter} alt="twitter-icon" />
                </a>
            </span>
        </div>
    )
}

export default Footer;