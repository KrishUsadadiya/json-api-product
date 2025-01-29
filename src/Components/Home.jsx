import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductAsync, getAllProducts, getAllProductsAsync } from "../services/actions/product.Action";
import { useNavigate } from "react-router";
import { Button, Card, Row } from "react-bootstrap";

function Home() {
  const { products, isLoading } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };
  const handleDelete = (id) => {
    dispatch(deleteProductAsync(id));
  };

  useEffect(() => {
    dispatch(getAllProductsAsync());
  }, []);
  return (
    <div >
      {isLoading ? <h2>Loading....</h2> : products.length == 0 ? (
        <h4>Product Not Found</h4>
      ) : (
        <>
          <div className="d-flex gap-3">
            {products.map((product) => (
              <Card key={product.id} className="text-start p-2">
                <Card.Img src={product.image} />
                <Card.Body>
                  <Card.Title>Id :- {product.id}</Card.Title>
                  <Card.Text>Name :- {product.name}</Card.Text>
                  <Card.Text>Category :- {product.category}</Card.Text>
                  <Card.Text>Price :- {product.price}</Card.Text>
                  <Card.Text>Description :- {product.description}</Card.Text>
                  <div className="text-center">
                    <Button className="me-3 button-70" onClick={() => handleEdit(product.id)}>Edit</Button>
                    <Button className="button-70" onClick={() => handleDelete(product.id)}>Delete</Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
