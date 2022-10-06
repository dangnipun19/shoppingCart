import Head from 'next/head'
import Filter from '../components/Filter'
import Header from '../components/Header'
import ProductFeed from '../components/ProductFeed'

export default function Home({products,categories}) {
  return (
    <>
    <div className='bg-white'>
      <Head>
        <title>app</title>
      </Head>
      <Filter categories ={categories} products = {products}></Filter>
      <Header></Header>
      <main className="max-w-screen-2xl mx-auto">
        <ProductFeed products ={products}/>
      </main>
    </div>
    </>
  )
}

export async function getServerSideProps(){
  const products = await fetch("https://dummyjson.com/products?limit=100").then(
    (res) =>res.json()
  )
  const categories = await fetch("https://dummyjson.com/products/categories").then(
    (res) =>res.json()
  )
  return{props:{
    products,
    categories
  }}
}