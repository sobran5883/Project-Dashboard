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
        <div ref={modalRef} onClick={closeModal} className='fixed inset-0 z-50 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-10/12 md:w-6/12 mt-10 flex flex-col items-center text-white'>
                <div className='flex w-full justify-end pb-2'>
                <button onClick={onClose} className='place-self-end'><RxCross2 size={30}/></button>
                </div>
                <div className='bg-black rounded-xl w-full flex-col flex p-12 align-center justify-center gap-5 items-center mx-4'>
                    <h1 className='text-center text-lg text-white font-semibold'>Please try after some time</h1>
                </div>
            </div>
        </div>
    )
}

export default Modal;