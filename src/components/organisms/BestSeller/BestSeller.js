import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../redux/actions/getAllProducts.action";
import best from "./BestSeller.module.scss";
import Loader from "../../atoms/Loader/Loader";
import Image from "../../atoms/Image/Image";
import LinkTo from "../../atoms/Link/LinkTo";

export default function BestSeller() {
  const dispatch = useDispatch();
  let { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts(0));
  }, [dispatch]);

  if (products.isLoading) {
    return <Loader />;
  }

  if (!products?.products?.length) {
    return "No products found";
  }

  const bestSellerProducts = products?.products
    ?.sort((p1, p2) =>
      p1.rating < p2.rating ? 1 : p1.rating > p2.rating ? -1 : 0
    )
    .slice(0, 4);

  return (
    <div className={best.maincontainer}>
    <div className={best.container}>
        <div className={best.bestSeller}>Our Best Sellers</div>
        <div className={best.div1}>
          {bestSellerProducts.length > 0 &&
            bestSellerProducts?.map((prod, index) => {
              return (
                <LinkTo
                  key={prod.id}
                  id={prod.id}
                  className={`${best.imageWrapper} ${
                    index === 0 && best.item1
                  } `}
                  to = {`product/${prod.id}`}
                >
                  <Image src={prod.thumbnail} alt={`product name is `}/>
                  <div className={best.prodInfo}>
                    <span className={best.category}>{prod.category}</span>
                    <span className={best.title}> {prod.title}</span>
                    <p className={best.price}> ${prod.price}</p>
                  </div>
                  <span className={best.rating}>{prod.rating}</span>
                </LinkTo>
              );
            })}
        </div>
    </div>
    </div>
  );
}
