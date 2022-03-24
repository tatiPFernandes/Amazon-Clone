import Product from "./Product";

export function ProductFeed({ products  }) {
  
    return (
     
               /* grid-flow-row-dense makes use all the space of the grid  */
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
          
        {  /*slicing the products to show 4 products before the second banner */}
          {products.slice(0,4).map(({id,title,price, description, category, image}) =>(
              
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
            {/*makes the second banner on the medium screen takes the full width of the page */}
          <img className="md:col-span-full" src="https://links.papareact.com/dyz"/>
          
            <div className="md:col-span-2">
            {products.slice(4,5).map(({id,title,price, description, category, image}) =>(
              
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
            {/*redering the length of products after the fifth product to the screen*/}
            {products.slice(5,products.length).map(({id,title,price, description, category, image}) =>(
              
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

