import { VscFileSubmodule } from "react-icons/vsc";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import forest from '../assets/project/forest.jpg'
import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { RxSwitch } from "react-icons/rx";
function NewProjects() {
    const [showInput, setShowInput] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newContainers, setNewContainers] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [isGreen, setIsGreen] = useState(false);

    const handleClick = () => {
        setIsGreen(!isGreen);
    };

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleIconClick = () => {
        setShowInput(true);
    };
    const handleIconClick1 = () => {
        setShowInput(false);
    };
    const handleInputChange = (event) => {
        setNewTitle(event.target.value);
    };
    const getCurrentDateFormatted = () => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const currentDate = new Date();
        const day = currentDate.getDate();
        const monthIndex = currentDate.getMonth();
        const year = String(currentDate.getFullYear()).slice(2);
        return `${day} ${months[monthIndex]} ${year}`;
    };
    const handleInputSubmit = () => {
        if (newTitle.trim() !== '') {
            const currentDate = getCurrentDateFormatted();
            const newContainer = (
                <div className="rounded-md border-[1px]">
                    <div className="w-full">
                        <img className="rounded-t-md" src={forest} alt="" />
                    </div>
                    <div className="mt-2 p-2">
                        <h1 className="title font-semibold">{newTitle}</h1>
                        <h1 className="text-gray-500">updated {currentDate}</h1>
                    </div>
                </div>
            );
            setNewContainers([...newContainers, newContainer]);
            setShowInput(false);
            setNewTitle('');
        }
    };
  return (
    <div className="w-full flex flex-col items-center justify-center mt-6 md:my-12">
        <div className="w-11/12 md:w-10/12 flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-4">
                <span className='w-10 h-10 border-2 border-black flex items-center justify-center text-2xl font-extrabold text-black bg-gradient-to-r from-[#eee9e5] to-[#f1730d] p-2 rounded-full'>A</span>
                <h1 className="md:text-2xl font-bold">Adam Cooper Team</h1>
            </div>
            <div>
                <button className="bg-black text-white font-medium md:font-semibold px-2 md:px-4 py-1 rounded-md">New Project</button>
            </div>
        </div>
        <div className="w-11/12 md:w-10/12 h-fit bg-white p-6 my-10 rounded-md">
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <VscFileSubmodule className="text-2xl"/>
                    <div>
                        <h1 className="font-semibold">Default Project</h1>
                        <span className="text-gray-500">1 storyboard</span>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <BsThreeDotsVertical/>
                    <IoIosArrowDown/>
                </div>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                {newContainers.map((container, index) => (
                <div key={index}>{container}</div>
                ))}
                <div className="rounded-md border-[1px] bg-gray-100 h-[285px]" onClick={handleIconClick}>
                    <div className="flex h-full items-center justify-center">
                        <CiCirclePlus className="text-4xl text-gray-400 "/>
                    </div>
                </div>
                {showInput && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-md shadow-md">
                            <div className="flex items-center justify-between mb-6">
                                <h1 className="text-lg font-bold">New Storyboard</h1>
                                <button className="bg-gray-200 rounded-full p-1" onClick={handleIconClick1}>
                                    <RxCross2 className="text-sm"/>
                                </button>
                            </div>
                            <div>
                                <label className="text-sm font-semibold">Storyboard Name</label>
                                <input
                                    type="text"
                                    value={newTitle}
                                    onChange={handleInputChange}
                                    placeholder="e.g. Default Project Storyboard"
                                    className="border border-gray-300 p-2 w-full mb-4"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold">Frame Size</label>
                                <select className="border border-gray-300 p-2 w-full mb-4" id="dropdown" onChange={handleSelectChange}>
                                    <option value="option1">Landscape(16:9)</option>
                                    <option value="option2">Portrait(9:16)</option>
                                    <option value="option3">Square(1:1)</option>
                                </select>
                            </div>
                            <div className="w-full flex justify-between">
                                <div className="flex items-center gap-2">
                                    <RxSwitch onClick={handleClick} className={`rx-switch ${isGreen ? 'text-green-500' : ''} text-xl cursor-pointer`}/>
                                    <span className="text-xs font-bold">AI Assistant</span>
                                </div>
                                <button onClick={handleInputSubmit} className={`px-4 py-1 rounded-md ${newTitle.trim() === '' ? 'bg-gray-300 ' : 'bg-black'} text-white`}>
                                    Create Stroyboard
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default NewProjects
