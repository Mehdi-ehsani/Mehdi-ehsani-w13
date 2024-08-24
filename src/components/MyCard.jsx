import laptopImg from "../assets/image/5.jpg";

const MyCard = () => {
	return (
		<div className="sm:w-[320px] w-full h-fit border-2 bg-gray-100 border-gray-200 flex flex-col  rounded-xl overflow-hidden shadow-md ">
			<img className="w-full h-[256px]" src={laptopImg} />
			<div className="w-full  flex flex-col justify-between p-4" dir="rtl">
				<h3 className="text-3xl">لپ تاپ کارکرده</h3>
				<div>
					<p className="text-2xl text-gray-700">27,500,000</p>
					<div className="flex gap-5 items-center justify-between mt-3">
						<p className="cursor-pointer text-xl text-gray-700 w-1/2 h-10 leading-10 text-center rounded-md bg-gray-300">ویرایش </p>
						<p className="cursor-pointer text-xl text-red-600 w-1/2 h-10 leading-10 text-center  rounded-md border-2 border-red-600 "> حذف</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyCard;
