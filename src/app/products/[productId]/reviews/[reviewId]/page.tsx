async function ReviewDetails({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  // console.log(params);
  // const current_params = await params;
  const { productId, reviewId } = await params;
  return (
    <h1>
      Details About product {productId} and review {reviewId}
    </h1>
  );
}

export default ReviewDetails;
