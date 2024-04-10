import {FaSearch} from 'react-icons/fa';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { BsLightningCharge } from "react-icons/bs";
import 'react-circular-progressbar/dist/styles.css';

function Header() {
  return (
    <div className="w-full flex justify-center bg-white">
        <div className="w-full pl-4 py-4">
            <div className='w-full flex gap-2 items-center justify-between'>
                <div className="flex items-center gap-4">
                    <span className="w-10 h-10  flex items-center justify-center text-2xl font-extrabold text-white bg-black p-2 rounded-full">B</span>
                    <h1 className="text-xl font-bold hidden md:block">Project Dashboard</h1>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='hidden md:block'>
                        <form className="flex items-center gap-2 border-2 rounded px-2 py-1">
                            <FaSearch className='text-gray-300'/>
                            <input className="outline-none text-lg placeholder:text-gray-400 md:pr-20" type="text" placeholder="search my storyboards"/>
                        </form>
                    </div>
                    <div className='hidden md:block'>
                        <div className='flex items-center gap-2 border-2 border-[#c6ecf4] rounded-lg p-2 bg-[#edfcff]'>
                            <div style={{ width: 30, height: 30, strokeWidth:4 }}>
                              <CircularProgressbar
                               value={25}
                                text={`${4}`}
                                styles={buildStyles({
                                    textSize:'48px',
                                    pathColor: '#2276c0',
                                    textColor: '#000000',
                                    trailColor: '#ade0ec',
                                    backgroundColor: '',
                                })}/>
                            </div>
                            <h1 className='font-bold text-base'>Quick Start</h1>
                        </div>
                    </div>
                    <span className='w-10 h-10 border-2 border-black flex items-center justify-center text-2xl font-extrabold text-black bg-gradient-to-r from-[#eee9e5] to-[#f1730d] p-2 rounded-full'>A</span>
                    <div className='w-10 h-10  flex items-center justify-center text-xl text-white p-2 bg-black rounded-l-full'>
                        <BsLightningCharge/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header