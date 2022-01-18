import RenderIconAndName from './RenderIconAndNameComponent';
import { FaBeer,FaFileSignature } from 'react-icons/fa';
import {AiOutlineHome } from 'react-icons/ai'
import {SiReadthedocs} from 'react-icons/si'
import {BsFillChatFill } from 'react-icons/bs'
import {BiTask} from 'react-icons/bi'

export default function AppBar() {
    return (
        <div className="bg-[#061451] w-64 h-[48rem]">
            <div>
                <h1 className="text-white text-4xl text-center pt-4">
                    ExaDock
                </h1>
            </div>

            <RenderIconAndName icon={<AiOutlineHome className="text-2xl " />} name="Home" />
            <RenderIconAndName icon={<SiReadthedocs className="text-2xl " />} name="Docs" />
            <RenderIconAndName icon={<BsFillChatFill className="text-2xl " />} name="Chat" />
            <RenderIconAndName icon={<FaFileSignature className="text-2xl " />} name="E-sign" />
            <RenderIconAndName icon={<BiTask className="text-2xl " />} name="Tasks" />

        </div>

    )
}