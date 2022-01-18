export default function RenderIconAndName({ icon, name }) {
    return (
        <div className="grid grid-cols-4 p-2">
            <div className="col-span-1 grid justify-center content-center  text-white">
                {icon}
            </div>
            <div className="col-span-3 text-left ">
                <h1 className="text-2xl text-white">
                    {name}
                </h1>
            </div>
        </div>
    )
}