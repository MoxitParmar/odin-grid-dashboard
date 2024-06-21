   import { gridlogos } from "../assets/images"
import { grid_card } from "../constants"
   
    const Gridcard = () => {
      return (
        
        <div className="grid grid-rows-3 grid-cols-2 h-[90%] w-full gap-5 px-5">
            {grid_card.map((grid, index) => (
            <div key={index} className="shadow-lg rounded-lg flex flex-col bg-white cursor-pointer border-l-8 border-yellow-500">
            
                    <p className="text-black font-roboto font-bold text-xl align-top pt-8 px-5 "> {grid.project} </p>
                    <p className="flex-1 font-roboto text-slate-500  align-top pt-1 px-5 "> {grid.description} </p>
                    <img src={gridlogos} alt='hello' className="h-12 w-36 self-end mx-5 mb-5"/>
            </div>
            ))}          
        </div>
      )
    }
    
    export default Gridcard