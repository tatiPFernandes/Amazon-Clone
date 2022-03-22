export function ProductFeed({ products }) {
  
    return (
      <div>
          <p>Products</p>
          {products.map((product) =>(
              <p>
                  {product.title}
              </p>
          ))}
          
          </div>
      

    )
  }


export default ProductFeed;

