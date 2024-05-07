import { Metadata } from "next";
import { resolve } from "path";

type props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({ params }: props): Promise <Metadata> => {

  const title =await new Promise(resolve=>{
    setTimeout(()=>{
    resolve(`iphone ${params.productId}`)
    },100)
  })
  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetails({ params }: props) {
  return <h1>Product Details page {params.productId}</h1>;
}
