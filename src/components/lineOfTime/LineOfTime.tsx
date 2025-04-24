import PartDescription from "./PartDescription"

type LineOfTIMEProps = {
    data: {
      title: string;
      time: string;
      description: string;
    }[];
};

const LineOfTIME:React.FC<LineOfTIMEProps> = ({data}) => {

    return(
        <div className=" mt-12 md:mt-20">
            {data.map((experience) => (
                <PartDescription key={experience.title} title={experience.title} time={experience.time} description={experience.description} />
                ))
            }
        </div>
    )
}
export default LineOfTIME 