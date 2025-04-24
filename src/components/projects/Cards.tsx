import TechList from './TechList'
import {Eye, Github} from 'lucide-react'

type CardProps = {
    data : {
        name: string
        link: string
        code: string
        description: string
        picture?: string
        technologies: string[]
    }

}

const Card:React.FC<CardProps> = ({data}) =>{
    return (
        <div key={data.name} className=' bg-white/10 backdrop-blur-sm rounded-xl p-6 cursor-pointer md:flex group hover:bg-black/20'>
            <div className='px-3'>
                <h3 className='text-xl font-bold mb-4'>{data.name}</h3>
                <p className='text-base'>{data.description}</p>
                <div className='mt-6'>
                    <ul className="grid grid-cols-3 xl:grid-cols-4 gap-2">
                        {
                            data.technologies.map((tech) => (
                                <TechList text={tech}/>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className='flex justify-end md:flex-col md:justify-start gap-4 md:pl-14 pt-6 md:pt-2'>
                    <a href={data.link} target="_blank" className='bg-black/70 rounded-md p-1 hover:bg-pink-700 transition-transform duration-300 transform group-hover:-translate-y-1 group-hover:scale-105'>
                        <Eye />
                    </a>
                    <a href={data.code} target="_blank" className='bg-black/70 rounded-md p-1 hover:bg-pink-700 transition-transform duration-300 transform group-hover:-translate-y-1 group-hover:scale-105'>
                        <Github />
                    </a>
            </div>
            {/* <div className='w-2/5 flex items-end'>
                <img className="rounded-3xl object-contain object-left-top" src={data.picture} alt=""/>
            </div> */}
        </div>
    )
}
export default Card