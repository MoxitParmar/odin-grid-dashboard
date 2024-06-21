import { Trending1 } from "../constants"

const Trending = () => {
  return (
      <div>
        {Trending1.map((Trending, index) => (
        <div key={index} className="flex gap-4">
            <img src={Trending.img} alt={Trending.name} className="size-14 " />
            <div className="flex flex-col mb-8 pt-2">
                <p className="text-black font-roboto font-semibold text-sm  "> {Trending.name} </p>
                <p className=" font-roboto text-slate-500  text-sm"> {Trending.desc} </p>
            </div>
            
        </div>
        ))}
    </div>
  )
}

export default Trending