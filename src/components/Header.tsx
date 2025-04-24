import ButtonRef from "./buttons/ButtonRef"
import {BriefcaseBusiness, CodeXml} from 'lucide-react'
import { motion } from "framer-motion";


const Header: React.FC = () => {
    return (
        <header id="home" className="h-screen flex justify-center ">
            <div className="container flex flex-col items-center justify-center">
                <motion.span
                    animate={{
                      rotate: [0, 20, -10, 20, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                    style={{ originX: 0.7, originY: 0.7 }}
                    className="text-7xl inline-block" aria-hidden="true">
                    👋🏼
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      scale: {
                        type: "spring",
                        stiffness: 80,
                        damping: 15,
                      },
                    }} 
                    className="text-4xl md:text-6xl mt-5 text-center">
                    ¡Hola! <br className="md:hidden mt-8"></br> Soy Jersabell Tineo
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      scale: {
                        type: "spring",
                        stiffness: 80,
                        damping: 15,
                      },
                    }} 
                    className="md:text-2xl mt-10 text-center">
                    Bienvenidos a mi hogar digital, donde comparto mi aventura en el mundo TECH. 
                    <br></br>Soy desarrolladora web autodidacta, entusiasta y amante de la tecnología.
                </motion.p>
                <div className="flex flex-col md:flex-row justify-center align-center gap-8 mt-12">
                    <ButtonRef icon = {<CodeXml/>} text='Proyectos' href="#projects"></ButtonRef>
                    <ButtonRef icon = {<BriefcaseBusiness/>} text='Experiencia' href="#experience"></ButtonRef>
                </div>
            </div>

        </header>
    )
}
export default Header