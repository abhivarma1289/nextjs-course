export default function ProductDetails({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  return <h1>Product Details page {params.productId}</h1>;
}
