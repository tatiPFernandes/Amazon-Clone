import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed"

export default function Home({products}) {
  return (
    <div className="bg-gray-100">
      <Head >
        <title>Amazon 2.0</title>
      </Head>

      <Header/>
       
      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner/>

        {/* ProductFeed */}
        <ProductFeed products={products} />
        
      </main>
    </div>
  );
}

//Server side render/ with getServerSideProps tells nextjs that the page is no longer static
export async function getServerSideProps(contex){
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  );
  
  // passing the data and returning as a props that can be passed to a component
  return{
    props:{
      products,
    }
  
  }
}