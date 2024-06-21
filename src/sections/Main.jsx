import Gridcard from "../components.js/gridcard"
import Announcement from "../components.js/Announcement"
import Trending from "../components.js/Trending"

const Main1 = () => {
  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col h-[100%] w-[75%]">
        <div className="font-roboto font-semibold mt-8 ml-5 mb-5 text-xl ">Your Projects</div>
        <div className="h-full w-full ">
          <Gridcard/>
        </div>
      </div>
      <div className="flex flex-col h-[90%] w-[25%] mt-8 gap-1">
        <div className="font-roboto font-semibold text-xl mb-3">Anouncements</div>
        <div className="shadow-lg rounded-lg flex flex-col bg-white cursor-pointer mr-5 p-8 h-[37vh]"> <Announcement/> </div>
        <div className="font-roboto font-semibold text-xl pt-5 mb-1 ">Trending</div>
        <div className="shadow-lg rounded-lg flex flex-col bg-white cursor-pointer mr-5 p-8 pt-4 h-[34vh]"> <Trending/> </div>
      </div>

    </div>
  )
}

export default Main1