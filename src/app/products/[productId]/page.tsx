async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  // console.log(params);
  const productId = (await params).productId;
  return <h1>Details About product {productId}</h1>;
}

export default ProductDetails;
