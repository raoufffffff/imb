import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'
import links from '../links'

interface LinkItem {
    name: string;
    to: string;
    type?: boolean;
    links?: Array<{
        name: string;
        to: string;
    }>;
}

interface MinLinksProps {
    setShow: (show: boolean) => void;
}

const MinLinks = ({ setShow }: MinLinksProps) => {
    const [expandedLink, setExpandedLink] = useState<number | null>(null)

    const toggleSubLinks = (index: number) => {
        setExpandedLink(expandedLink === index ? null : index)
    }

    const mylinks = links.map((e: LinkItem, i: number) => (
        <div key={i} className="relative group px-3 border-b-2 border-b-[#f7f7f7]">
            <Link
                className={`flex items-center my-3 hover:text-primary transition-colors font-bold text-[#1b3d4e] duration-200`}
                to={e.to}
                onClick={(event: React.MouseEvent) => {
                    if (e.type) {
                        event.preventDefault()
                        toggleSubLinks(i)
                    } else {
                        setShow(false)
                    }
                }}
            >
                {e.name}
                {e.type && (
                    <motion.span
                        animate={{ rotate: expandedLink === i ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <IoIosArrowDown size={24} className='mt-1.5 mx-2' />
                    </motion.span>
                )}
            </Link>

            <AnimatePresence>
                {e.links && expandedLink === i && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-4"
                    >
                        {e.links.map((subLink, subIndex: number) => (
                            <Link
                                key={subIndex}
                                className='flex items-center my-3 hover:text-primary transition-colors font-bold text-[#1b3d4e]'
                                to={subLink.to}
                                onClick={() => setShow(false)}
                            >
                                {subLink.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    ))

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className='absolute py-2 bg-[#f7f7f7] left-0 top-[80px] w-full z-50 shadow-lg'
        >
            <nav className='mx-auto flex flex-col w-11/12 justify-center bg-white rounded-lg overflow-hidden'>
                {mylinks}
                <Link
                    className='flex items-center px-3 my-3 hover:text-primary transition-colors font-bold text-[#1b3d4e] duration-200'
                    to={'/log'}
                    onClick={() => setShow(false)}
                >
                    تسجيل الدخول
                </Link>
            </nav>
        </motion.div>
    )
}

const MdLinks = () => {
    const mylinks = links.map((e: LinkItem, i: number) => (
        <motion.div
            key={i}
            className="relative group"
            whileHover="hover"
            initial="rest"
        >
            <Link
                className={`mx-2 py-2 px-1 flex items-center hover:text-[#1b3d4e] transition-colors duration-200 ${e.type ? "group" : ""
                    }`}
                to={e.to}
            >
                {e.name}
                {e.type && (
                    <motion.span
                        variants={{
                            rest: { rotate: 0 },
                            hover: { rotate: 180 }
                        }}
                        transition={{ duration: 0.2 }}
                        className='mt-1.5 mx-0.5'
                    >
                        <IoIosArrowDown />
                    </motion.span>
                )}
            </Link>

            {e.links && (
                <motion.div
                    variants={{
                        rest: { opacity: 0, y: 10, pointerEvents: 'none' },
                        hover: { opacity: 1, y: 0, pointerEvents: 'auto' }
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-0 top-full mt-1 w-48 bg-white shadow-lg rounded-md py-2 z-50"
                >
                    {e.links.map((subLink, subIndex: number) => (
                        <Link
                            key={subIndex}
                            className='block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-[#1b3d4e] transition-colors'
                            to={subLink.to}
                        >
                            <motion.div
                                whileHover={{ x: 5 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                {subLink.name}
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
            )}
        </motion.div>
    ))

    return (
        <nav className='hidden sm:flex items-center'>
            {mylinks}
        </nav>
    )
}

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <header className='flex justify-between items-center w-full py-2 px-6 bg-[#f7f7f7] shadow-sm sticky top-0 z-40'>
            <Link to={'/'}>
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='w-16 h-16 object-contain hover:opacity-90 transition-opacity'
                    alt='logo'
                    src='/logo.png'
                />
            </Link>

            <MdLinks />

            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='hidden sm:block'
            >
                <Link
                    className='hover:border-[#1b3d4e] hover:border hover:text-[#1b3d4e] hover:bg-white bg-[#1b3d4e] text-white px-4 py-2 rounded-md transition-colors duration-200'
                    to={'/log'}
                >
                    تسجيل الدخول
                </Link>
            </motion.div>

            <AnimatePresence>
                {showMobileMenu && <MinLinks setShow={setShowMobileMenu} />}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='sm:hidden text-[#1b3d4e] p-2'
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                aria-label="Toggle menu"
            >
                {showMobileMenu ? <FaTimes size={30} /> : <FaBars size={30} />}
            </motion.button>
        </header>
    )
}

export default Header