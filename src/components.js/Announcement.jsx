import { Announce } from "../constants"

const Announcement = () => {
  return (
      <div>
          {Announce.map((Announce, index) => (
              <div key={index} className="">
            
                  <p className="text-black font-roboto font-bold text-sm "> {Announce.topic} </p>
                  <p className=" font-roboto text-slate-500  text-sm pb-3 "> {Announce.desc} </p>
                  <hr className="pb-2" />
              </div>
          ))}
    </div>
  )
}

export default Announcement