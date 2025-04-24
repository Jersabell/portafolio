type TechListProps = {
    text: string
}
const colorMap: Record<string, string> = {
    Javascript: 'bg-yellow-500',
    HTML: 'bg-red-500',
    CSS: 'bg-blue-500',
    React: 'bg-cyan-500',
    Bootstrap: 'bg-fuchsia-600',
    Firebase: 'bg-amber-500',
    'Node.js': 'bg-lime-500',
    Vite: 'bg-green-500',
    Tailwind: 'bg-cyan-400',
    TypeScript: 'bg-cyan-600'
  }
  

const TechList:React.FC<TechListProps> = ({text}) => {
const showColor = () => colorMap[text] || 'bg-gray-400'
    return (
        <li key={text}> 
            <span className={`flex justify-center items-center gap-x-2 rounded-full text-xs text-black font-bold py-1 px-2 ${showColor()}`} >
                {text}
            </span> 
        </li>
    )
}
export default TechList