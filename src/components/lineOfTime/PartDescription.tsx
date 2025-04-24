import { motion, useInView } from "framer-motion";
import './PartDescription.css'
import { useRef } from "react";

type PartDescriptionProps = {
    title: string
    time: string
    description: string
}

const PartDescription:React.FC<PartDescriptionProps> = ({title, time, description}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return(
        <div
            className="circle-description flex pb-12 border-s  border-pink-950">
           <motion.div 
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="ml-10">
             <h3 className="font-bold text-xl md:text-2xl">{title}</h3>
             <span className="text-base">{time}</span>
             <p className="text-lg mt-3">{description}</p>
           </motion.div>
        </div>
    )
}
export default PartDescription;