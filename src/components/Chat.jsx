import { BiMessageMinus } from "react-icons/bi";
import ChatPopUp from './ChatPopUp'
import { useState } from "react";
function Chat() {
const [showModal, setShowModal] = useState(false)
  return (
    <div>
    <div onClick={()=>setShowModal(true)} className=' cursor-pointer flex fixed bottom-10 right-4 md:right-16 p-2 rounded-full z-20 bg-[#5f5e5e]'>
       <BiMessageMinus className="md:text-3xl text-xl text-white"/>
    </div>
    {showModal && <ChatPopUp onClose={()=>setShowModal(false)}/>}
    </div>
  )
}

export default Chat