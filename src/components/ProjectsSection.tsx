import Card from "./projects/Cards"
import Projects from "../assets/data/data-projects.json"

const ProjectsSection:React.FC = () => {
    return (
        <section id="projects" className="bg-pink-900 py-24">
        <div className="container">
            <div className="px-4 md:px-32 text-white">
                <h2 className="text-3xl font-bold md:text-4xl text-center">
                    Proyectos
                </h2>
                <div className="grid lg:grid-cols-2 gap-8 mt-14">
                    {
                        Projects.map((project) => (
                            <Card data={project}></Card>
                        ))
                    }
                    
                </div>
            </div>
            
        </div>
    </section>
    )
}

export default ProjectsSection