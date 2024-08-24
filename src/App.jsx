import Navbar from "./components/Navbar";
import { useState } from "react";
import Ads from "./pages/Ads";
import MyAds from "./pages/MyAds";
import Profile from "./pages/Profile";
import Exit from "./pages/Exit";

function App() {
	const [hover, setHover] = useState(null);
	const [page, setPage] = useState(JSON.parse(localStorage.getItem("page")) || {
		ads: true,
		myAds: false,
		profile: false,
		exit: false,
	});
	const pageChangeHandler = (name) => {
		switch (name) {
			case "ads":
				setPage({
					ads: true,
					myAds: false,
					profile: false,
					exit: false,
				});
        localStorage.setItem("page" , JSON.stringify({
					ads: true,
					myAds: false,
					profile: false,
					exit: false,
				}))
				break;
			case "myAds":
				setPage({
					ads: false,
					myAds: true,
					profile: false,
					exit: false,
				});
        localStorage.setItem("page" , JSON.stringify({
					ads: false,
					myAds: true,
					profile: false,
					exit: false,
				}))
				break;
			case "profile":
				setPage({
					ads: false,
					myAds: false,
					profile: true,
					exit: false,
				});
        localStorage.setItem("page" , JSON.stringify({
					ads: false,
					myAds: false,
					profile: true,
					exit: false,
				}))
				break;
			case "exit":
				setPage({
					ads: false,
					myAds: false,
					profile: false,
					exit: true,
				});
        localStorage.setItem("page" , JSON.stringify({
					ads: false,
					myAds: false,
					profile: false,
					exit: true,
				}))
				break;
		}
	};
  const showHandler = () => {
		if (page.ads) return <Ads/>;
		if (page.myAds) return <MyAds/>;
		if (page.profile) return <Profile/>;
		if (page.exit) return <Exit/>;
	};
  const hoverEnterHandler = (name) => {
    setHover(name)
   }
   const hoverLeaveHandler = () => {
     setHover(null)
   }
	return (
		<div>
			<Navbar />
			<div className="grid grid-cols-4 gap-8" >
				<div className="col-span-3">{showHandler()}</div>
				<div className="w-full h-[300px] col-span-1 bg-gray-100 rounded-3xl mt-8  shadow-lg p-4">
          <p onClick={() => pageChangeHandler("ads")} onMouseEnter={() => hoverEnterHandler("ads")} onMouseLeave={() => hoverLeaveHandler()} className={hover === "ads" || page.ads? "text-red-600 text-2xl text-center h-1/4 border-b-2 border-gray-200 leading-[65px] cursor-pointer" : "text-2xl text-center h-1/4 border-b-2 border-gray-200 leading-[65px] cursor-pointer"}>آگهی ها</p>
          <p onClick={() => pageChangeHandler("profile")} onMouseEnter={() => hoverEnterHandler("profile")} onMouseLeave={() => hoverLeaveHandler()} className={hover === "profile" || page.profile? "text-red-600 text-2xl text-center h-1/4 border-b-2 border-gray-200 leading-[65px] cursor-pointer" : "text-2xl text-center h-1/4 border-b-2 border-gray-200 leading-[65px] cursor-pointer"}>پروفایل</p>
          <p onClick={() => pageChangeHandler("myAds")} onMouseEnter={() => hoverEnterHandler("myAds")} onMouseLeave={() => hoverLeaveHandler()} className={hover === "myAds" || page.myAds? "text-red-600 text-2xl text-center h-1/4 border-b-2 border-gray-200 leading-[65px] cursor-pointer" : "text-2xl text-center h-1/4 border-b-2 border-gray-200 leading-[65px] cursor-pointer"}>آگهی های من</p>
          <p onClick={() => pageChangeHandler("exit")} onMouseEnter={() => hoverEnterHandler("exit")} onMouseLeave={() => hoverLeaveHandler()} className={hover === "exit" || page.exit? "text-2xl text-center text-red-600 h-1/4  leading-[65px] cursor-pointer" : "text-2xl text-center h-1/4  leading-[65px] cursor-pointer"}>خروج از حساب</p>    
        </div>
			</div>
		</div>
	);
}

export default App;
