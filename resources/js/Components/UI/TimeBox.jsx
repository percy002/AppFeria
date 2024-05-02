const TimeBox = ({ value, unit }) => {
    return (
        <div className="w-20 h-20 md:w-[7rem] md:h-[7rem] bg-secondary flex flex-col justify-center items-center">
            <span className="text-black text-4xl md:text-6xl font-bold">
                {value < 10 && "0"}
                {value}
            </span>
            <span className="text-primary text-base lg:text-xl font-bold">{unit}</span>
        </div>
    );
};
export default TimeBox;
