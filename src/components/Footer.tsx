
const Footer: React.FC = () => {
    return (
        <footer id="contact" className="py-10 bg-pink-950">
            <div className="container">
                <div className="flex justify-center items-center gap-6">
                    <hr className="flex-1 border border-pink-200 rounded-md " />
                    <a className="bg-black/50 p-3 rounded-xl hover:bg-pink-700" href="https://github.com/Jersabell" target="_blank" rel="noopener noreferrer">
                        <img className="w-6" src="/github-svgrepo-com.svg" alt="Github" />
                    </a>
                    <a className="bg-black/50 p-3 rounded-xl hover:bg-pink-700" href="https://www.linkedin.com/in/jersabell-tineo/" target="_blank" rel="noopener noreferrer">
                        <img className="w-6" src="/linkedin-logo-svgrepo-com.svg" alt="Linkedin" />
                    </a>        
                    <hr className="flex-1 border border-pink-200 rounded-md " />
                </div>
                <div className="text-pink-200 text-center mt-8">
                    <span className="inline-block mb-4">
                        Contacto: jersabell@gmail.com
                    </span>
                    <br></br>
                    <span className="text-sm">
                        ©2025 by Jersabell Tineo.
                    </span>
                </div>
            </div>

        </footer>
    )
}

export default Footer