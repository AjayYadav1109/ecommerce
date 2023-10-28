import ProductReview from "../ProductReview";
import ProductsDetails from "../ProductsDetails";
import SuggestionProduct from "../SuggestionProduct";

const ProductAllDetails = () => {
  return (
    <section>
      <ProductsDetails />
      <ProductReview />
      <SuggestionProduct />
    </section>
  );
};

export default ProductAllDetails;
