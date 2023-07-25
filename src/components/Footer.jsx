import { Link } from "react-router-dom";
import Logo from "../images/logo.jpeg";

const Footer = () => {
    return (
        <>
            <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <Link to="/" className="flex items-center mb-4 sm:mb-0">
                            <img src={Logo} className="h-8 mr-3" alt="Logo"
                                style={{
                                    width: "4rem",
                                    height: "4rem",
                                    border: "3px solid #1AA7EC",
                                    borderRadius: "10px"
                                }}
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                weebaf
                            </span>
                        </Link>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <Link to="/about" className="mr-4 hover:underline md:mr-6 ">About</Link>
                            </li>
                            <li>
                                <Link to="policies" className="mr-4 hover:underline md:mr-6">Policy</Link>
                            </li>
                            <li>
                                <Link to="contact" className="hover:underline">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">utkx2</Link>. All Rights Reserved.</span>
                </div>
            </footer>
        </>
    )
}

export default Footer;
