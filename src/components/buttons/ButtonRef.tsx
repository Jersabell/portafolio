import { motion } from "framer-motion";

interface ButtonRefProps {
    icon: React.ReactNode;
    text: string;
    href: string;
  }
const ButtonRef: React.FC<ButtonRefProps> = ({icon, text, href}) => {
    return(
        <motion.a 
            href={href}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <button className="flex items-center gap-2 px-5 py-2 rounded-2xl bg-gray-900/10 border border-slate-400 hover:border-pink-800 hover:bg-pink-800 hover:text-white md:text-lg">
                {icon}
                <span className="font-semibold">{text}</span>
            </button>
        </motion.a>
    )
}
export default ButtonRef