import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts, statuses } from "../store/productSlice";

function Products() {
  const dispatch = useDispatch();

  const { data, status } = useSelector((state) => state.product);

  // const [products, setProducts] = useState([]);

  // const fetchProducts = async () => {
  //   const url = "https://fakestoreapi.com/products";
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   setProducts(data);
  // };

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line
  }, []);

  const handleAdd = (prod) => {
    dispatch(add(prod));
  };

  if(status === statuses.LOADING){
    return <h2>Loading...</h2>
  }

  if(status === statuses.ERROR){
    return <h2>Something Went Wrong!</h2>
  }

  return (
    <div className="productsWrapper">
      {data.map((prod) => (
        <div className="card" key={prod.id}>
          <img src={prod.image} alt="demo" />
          <h4>{prod.title}</h4>
          <h5>{prod.price}</h5>
          <button onClick={() => handleAdd(prod)} className="btn">
            Add to card
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
