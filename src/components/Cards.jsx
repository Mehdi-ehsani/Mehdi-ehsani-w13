import { useState } from "react"
import pic1 from "../assets/image/1.jpg"
import pic2 from "../assets/image/2.jpg"
import pic3 from "../assets/image/3.jpg"
import pic4 from "../assets/image/4.jpg"
import pic5 from "../assets/image/5.jpg"
import pic6 from "../assets/image/6.jpg"
import Card from "./Card.jsx"



const Cards = () => {
    const [data , setData] = useState([
        {img: pic1 , title: "خونه ویلایی" , date: "لحظاتی پیش در تهران" , price: "12,000,000,000"},
        {img: pic2 , title: " ماشین", date: "1403/06/01" , price: "1,500,000,000"},
        {img: pic3 , title: "صندلی تک نفره" , date: "لحظاتی پیش در تهران" , price: "1,500,000"},
        {img: pic4 , title: "ایفون 13" , date: "1403/05/03" , price: "58,000,000"},
        {img: pic5 , title: "لپ تاپ کارکرده" , date: "لحظاتی پیش در تهران" , price: "27,500,000"},
        {img: pic6 , title: "دوچرخه" , date: "1402/11/11" , price: "20,000,000"},
    ])
  return (
    <div className="grid grid-cols-2 gap-10 mr-10 mt-8" >
        {data.map(card => <Card key={card.title} title={card.title} price={card.price} date={card.date} img={card.img}/>)}
    </div>
  )
}

export default Cards