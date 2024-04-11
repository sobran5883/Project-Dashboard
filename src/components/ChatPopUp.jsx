import { useRef} from 'react'
import { RxCross2 } from "react-icons/rx";

function Modal({onClose}){
    const modalRef = useRef();

    const closeModal = (e) =>{
        if(modalRef.current === e.target){
           onClose();
        }
    }

    return(
        <div ref={modalRef} onClick={closeModal} className='fixed inset-0 z-50 bg-black bg-opacity-30 flex justify-center items-center'>
            <div className='w-10/12 md:w-8/12 mt-10 flex flex-col items-center text-black bg-[#F9DEB3]  p-2 rounded-md'>
                <div className='flex w-full justify-end pb-2'>
                <button onClick={onClose} className='place-self-end'><RxCross2 size={30}/></button>
                </div>
                <div className='rounded-xl w-full flex-col flex md:p-12 px-4 align-center justify-center gap-5 items-center mx-4'>
                <div className="md:w-11/12">
                    <div>
                        <h1 className="font-semibold text-gray-700 font-inter max-w-[700px] text-2xl md:text-4xl">Contact us in case of any queries</h1>
                        <p className="mt-5 font-medium">Got a question? Send us a message and we’ll respond as soon as possible.</p>
                    </div>
                    <div className="flex items-center mt-5 mb-12">
                        <h1>Write to Us:</h1>    
                        <a href='mailto:support@aeonaxy.com ' className='text-black  font-semibold ml-2'>support@aeonaxy.com</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;