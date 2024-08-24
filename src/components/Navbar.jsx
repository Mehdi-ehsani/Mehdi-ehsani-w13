import user from "../assets/image/profile-user.png"
import logo from "../assets/image/logo.png"

const Navbar = () => {
  return (
    <div className="2xl:w-[1400px] 2xl:p-0 w-full px-10  h-24  mx-auto flex items-center justify-between border-b-2 border-gray-200">
        <img className="w-32 h-20" src={logo}/>
        <img className="w-12 h-12" src={user}/>
    </div>
  )
}

export default Navbar