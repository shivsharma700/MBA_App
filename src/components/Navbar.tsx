import { Link } from 'react-router-dom';

import DummyProfileImage from '../Assets/dummyImage.png';
import Logo from '../Assets/logo.png';
function Navbar() {

    return (
        <div className="bg-[#333545]">
            <div className="navbar bg-[#333545] w-[80vw] mx-auto">
            <div className="flex-1">
                <div className='h-12 mr-8'>
                    <Link to={"/"} >
                      <img className="h-[100%] w-36" src={Logo} />
                    </Link>
                </div>
                <div className="form-control hidden lg:block lg:w-96">
                    <input type="text" placeholder="Search" className="input input-bordered w-full" />
                </div>
            </div>
            <div className="flex-none gap-2">
                
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src={DummyProfileImage} />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm text-white dropdown-content bg-[#333545] rounded-box w-52">
                    <li>
                    <a className="justify-between hover:text-yellow-400">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a className=' hover:text-yellow-400 ' >Settings</a></li>
                    <li><a className=' hover:text-yellow-400 ' >Logout</a></li>
                </ul>
                </div>
            </div>
            </div>
            <div className="text-white bg-[#22232d]">
                <div className='flex gap-4 w-[80vw] mx-auto py-2'>
                    <div>
                        Movies
                    </div>
                    <div>
                        Events
                    </div>
                    <div>
                        Stream
                    </div>
                    <div>
                        Plays
                    </div>
                </div>
                
            </div>
        </div>
        
    );
}


export default Navbar;