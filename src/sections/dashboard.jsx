import { dashicon } from "../constants"
import {Dashboard1} from '../assets/icons';

const Dashboard = () => {
  return (
    <div className="ml-6 mt-6">

      <div className="flex gap-4 cursor-pointer  ">
        <img src={Dashboard1} alt="dashboard icon" className=" h-14 w-14 mb-12" />
        <p className="text-white font-bold font-roboto text-3xl">  Dashboard </p>
      </div>

      <div className="flex flex-col items-start gap-8">
      {dashicon.map((Icon, index) => (
        <div key={index} className="flex gap-6 cursor-pointer">
          <img src={Icon.Icon} alt={Icon.Text} className=" size-6"/>
          <p className="text-white font-roboto font-bold text-2xl align-top"> {Icon.Text} </p>
        </div>
      ) )}
      </div>

    </div>
  )
}

export default Dashboard