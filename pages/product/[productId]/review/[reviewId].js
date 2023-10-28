import { useRouter } from "next/router";

const Review = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <h1>
      Product {productId} Review {reviewId}
    </h1>
  );
};

export default Review;
