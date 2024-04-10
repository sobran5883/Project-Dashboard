import { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";
import Modal from "./PopUp";
function Banner() {
    const [showModal, setShowModal] = useState(false)
    const [minutes, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(1);
    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(timer);
                    return;
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } else {
                setSeconds(seconds - 1);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [minutes, seconds]);
  return (
    <div className="w-full">
        <div className="bg-[#F9DEB3] p-2">
            <div className="w-11/12 flex flex-col md:flex-row items-center gap-2 md:gap-4">
                <div className="w-fit flex gap-x-2 rounded-full items-center bg-[#F5C77C] px-3 py-2">
                    <FaClock/>
                    <span className="text-sm font-medium">One-Time Offer</span>
                </div>
                <div className="flex flex-col md:flex-row gap-2 items-center">
                    <h1 className="text-xs md:text-base">Your AI Storyboarding Bundle Discount expires in</h1>
                    <span className="time bg-orange-100 px-2 rounded-md text-[#EA9AA1]">
                    {`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
                    </span>
                </div>
                <div>
                    <button onClick={()=>setShowModal(true)} className="bg-[#EA9AA1] font-medium px-3 p-1 rounded-lg text-sm md:text-base">Claim Discount</button>
                </div>
            </div>
            {showModal && <Modal onClose={()=>setShowModal(false)}/>}
        </div>
    </div>
  )
}

export default Banner