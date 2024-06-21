import { bell, search } from "../assets/icons"
import { user1 } from "../assets/images"


const Nav = () => {
  return (
    <div className="h-full flex flex-col mx-12">
      <div className="flex-1 flex gap-5">
        <img src={search} alt="search" className="size-5 self-center cursor-pointer" />
        <input type="text" className="size-8 self-center bg-slate-200 flex-1 rounded-full " />
        <div className="flex ml-[70px]  gap-8">
          <img src={bell} alt="search" className="size-6  self-center cursor-pointer" />
          <img src={user1} alt="user1" className="size-14 self-center cursor-pointer"  />
          <p className="self-center font-roboto font-bold text-xl">Morgan Oakley</p>
        </div>
      </div>
      <div className=" flex-1 flex gap-5">
        <img src={user1} alt="user1" className="size-20 self-center cursor-pointer" />
        <div className="flex flex-col mt-5 gap-1 flex-1">
          <p className="font-roboto font-bold text-sm ">Hi there,</p>
          <p className="font-roboto font-bold text-xl">Morgan Oakley (@morgan) </p>
        </div>
        <button className="bg-sky-600 size-10 self-center w-24 rounded-full font-bold font-roboto text-white mr-4 cursor-pointer">New</button>
        <button className="bg-sky-600 size-10 self-center w-24 rounded-full font-bold font-roboto text-white mr-4 cursor-pointer">Upload</button>
        <button className="bg-sky-600 size-10 self-center w-24 rounded-full font-bold font-roboto text-white cursor-pointer">Share</button>
      </div>
    </div>
  )
}

export default Nav