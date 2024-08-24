import React, { useState } from "react";

const Profile = () => {
	const [isChange, setIsChange] = useState(false);
	const [name, setName] = useState(JSON.parse(localStorage.getItem("name")) || "مهدی احسانی");
	const [email, setEmail] = useState(JSON.parse(localStorage.getItem("email")) ||"metti.work@gmail.com");
	const [number, setNumber] = useState(JSON.parse(localStorage.getItem("number")) ||"09919312311");
	const [address, setAddress] = useState(JSON.parse(localStorage.getItem("address")) ||"این یک متن ساختگی است");

	const changeHandler = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		if (isChange) {
			switch (name) {
				case "name":
					setName(value);
          localStorage.setItem("name" , JSON.stringify(value))
					break;
				case "email":
					setEmail(value);
          localStorage.setItem("email" , JSON.stringify(value))
					break;
				case "number":
					setNumber(value);
          localStorage.setItem("number" , JSON.stringify(value))
					break;
				case "address":
					setAddress(value);
          localStorage.setItem("address" , JSON.stringify(value))
					break;
			}
		}
	};
	return (
		<div className=" w-full flex flex-col gap-3 text-xl  my-8 ">
      <label  className="text-xl text-gray-600">نام</label>
			<input
				onChange={changeHandler}
				name="name"
				className="w-[300px] h-12 px-4 rounded-md outline-none border-2 border-gray-300"
				value={name}
			/>
      <label  className="text-xl text-gray-600">ایمیل</label>
			<input
				onChange={changeHandler}
				name="email"
				className="w-[300px] h-12 px-4 rounded-md outline-none border-2 border-gray-300"
				value={email}
			/>
      <label  className="text-xl text-gray-600">شماره تلفن</label>
			<input
				onChange={changeHandler}
				name="number"
				className="w-[300px] h-12 px-4 rounded-md outline-none border-2 border-gray-300"
				value={number}
			/>
      <label  className="text-xl text-gray-600">آدرس</label>
			<input
				onChange={changeHandler}
				name="address"
				className="w-[300px] h-12 px-4 rounded-md outline-none border-2 border-gray-300"
				value={address}
			/>
			<div>
				<button
					onClick={() => setIsChange(!isChange)}
					className={
						isChange
							? "w-[150px] h-12 rounded-md bg-gray-300 shadow-md cursor-pointer hover:text-white onChange={changeHandler} hover:bg-green-600 transition-colors"
							: "w-[150px] h-12 rounded-md bg-gray-300 shadow-md cursor-pointer hover:text-white onChange={changeHandler} hover:bg-red-600 transition-colors"
					}
				>
					{isChange ? "ثبت" : "ویرایش"}
				</button>
			</div>
		</div>
	);
};

export default Profile;
