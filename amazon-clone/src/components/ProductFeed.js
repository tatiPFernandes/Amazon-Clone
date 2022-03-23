import Product from "./Product";

export function ProductFeed({ products  }) {
  
    return (
      <div>
          <p>Products</p>
          {products.map(({id,title,price, description, category, image}) =>(
              
              //rendering products from product component through props
              <Product 
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              
              
              />
              
          ))}
          
          </div>
      

    )
  }


export default ProductFeed;

