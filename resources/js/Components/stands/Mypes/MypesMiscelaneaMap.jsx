import GroupStands from "../GroupStands";

const MypesMiscelaneaMap = ({ color, stands }) => {
    console.log(stands);
    return (
        <div className="flex flex-col">
            <div className="">
                <p className="font-bold text-xl text-center">
                    MYPES MISCELÁNEAS
                </p>
            </div>
            <div className="flex items-center">
                <div className="flex flex-col">
                    <GroupStands
                        inicio={1}
                        cantidad={10}
                        stands={stands.slice(0, 10)}
                        color={color}
                        size={"small"}
                    />
                    <GroupStands
                        inicio={32}
                        cantidad={10}
                        stands={stands.slice(22, 32)}
                        color={color}
                        size={"small"}
                        orden={"desc"}
                    />

                    {/* <GroupStands
                        inicio={1}
                        cantidad={10}
                        stands={stands.slice(23, 32)}
                        color={color}
                        size={"small"}
                        orden={'desc'}
                    /> */}
                </div>
                <div className="flex items-center text-7xl h-full ">
                    <p>X</p>
                </div>
                <div className="flex flex-col">
                    <GroupStands
                        inicio={11}
                        cantidad={6}
                        stands={stands.slice(10, 16)}
                        color={color}
                        size={"small"}
                    />
                    <GroupStands
                        inicio={22}
                        cantidad={6}
                        stands={stands.slice(16, 22)}
                        color={color}
                        size={"small"}
                        orden={"desc"}
                    />
                </div>
                {/* {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="flex">
                        <div  className="flex flex-col">
                            <GroupStands
                                inicio={i * 2 + 4}
                                cantidad={2}
                                stands={stands.slice(i * 2, i * 2 + 2)}
                                color={color}
                                direction={"col"}
                                size={"small"}
                            />
                        </div>
                        {i == 10 && (
                            <div className="flex items-center text-7xl h-full ">
                                <p>X</p>
                            </div>
                        )}
                    </div>
                ))} */}
            </div>
        </div>
    );
};
export default MypesMiscelaneaMap;
