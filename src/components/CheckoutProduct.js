import Image from "next/image";
const CheckoutProduct =({
    key,
    id,
    title,
    price,
    description,
    category,
    image,
    hasPrime,
})=>{



    return(
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFit="contain" />

        </div>
    )
}

export default CheckoutProduct;