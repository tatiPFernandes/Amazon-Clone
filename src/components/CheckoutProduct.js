import { StarIcon } from "@heroicons/react/solid";
import Currency from"react-currency-formatter"
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
const CheckoutProduct =({
    key,
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime,
})=>{
    const dispach = useDispatch();
    const addItemToBasket =()=>{
        const product ={
    key,
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime, 
        }
    
    // Push item into redux
    dispach(addToBasket(product))
    };

    const removeItemFromBasket = ()=>{
    // Remove item from redux
    dispach(removeFromBasket({id}))
    }


    return(
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFit="contain" />

            {/* Middle Section*/}

            <div className="col-span-3 p-3 max-5">
                <p>{title}</p>                
          

            <div className="flex">
                {Array(rating).fill().map(i =>(
                    <StarIcon key={i} className="h-5 text-yellow-500"/>
                ))}
            </div>

            <p className="text-xs my-2 line-clamp-3">{description}</p>
            <Currency quantity={price} currency="GBP"/>

            {hasPrime && (
                <div className="flex items-center space-x-3" >
                    <img 
                    loading="lazy"
                    className="w-12" 
                    src="https://links.papareact.com/fdw" alt="prime-logo"
                    />

                    <p className="text-sm text-gray-500" >FREE Next-day Delivery</p>
                </div>
                
                
            )} 
            </div>
            
            {/* Add/Remove button */}

                <div className="flex flex-col space-y-2 my-auto justify-self-end ">
                 <button className="button" onClick={addItemToBasket}>Add to Basket</button> 
                 <button className="button" onClick={removeItemFromBasket}>Remove from Basket</button>
                </div>            

            </div>
        
    )
}

export default CheckoutProduct;