import { forwardRef } from "react"
import ButtonRef from "./buttons/ButtonRef"
import {FileDown} from 'lucide-react'
import LineOfTIME from "./lineOfTime/LineOfTime"
import dataExperience from '../assets/data/data-experience.json'

const ExperienceSection = forwardRef<HTMLDivElement> ((_, ref) => {
    return (
        <section id="experience" ref={ref} className="bg-pink-50 py-24">
            <div className="container">
                <div className="px-10 md:px-32">
                    <h2 className="text-3xl font-bold md:text-4xl text-center">
                        Experiencia
                    </h2>
                    <div className="flex justify-center mt-10">
                        <ButtonRef icon = {<FileDown/>} text='Download' href="/public/cv-jersabell-tineo.pdf"/>
                    </div>
                    <LineOfTIME data={dataExperience}/>
                </div>
                
            </div>
        </section>
    )
} )
export default ExperienceSection