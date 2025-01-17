import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Card.scss";
import { IoStarOutline } from "react-icons/io5";

function BasicExample() {
  return (
    <div>
      <div className="card-header">
        <div className="card-header-left">
          <h1>Latest Products</h1>
        </div>
        <ul className="card-header-right">
          <li>All</li>
          <li>New</li>
          <li>Featured</li>
          <li>Offer</li>
        </ul>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://preview.colorlib.com/theme/estore/assets/img/categori/product2.png.webp"
              />
              <Card.Body>
                <Card.Text
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                </Card.Text>
                <Card.Title
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  Green Dress with details
                </Card.Title>
                <Card.Text
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <span>$40.00</span>
                  <span>$60.00</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-4">
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://preview.colorlib.com/theme/estore/assets/img/categori/product2.png.webp"
              />
              <Card.Body>
                <Card.Text
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                </Card.Text>
                <Card.Title
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  Green Dress with details
                </Card.Title>
                <Card.Text
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <span>$40.00</span>
                  <span>$60.00</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-4">
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://preview.colorlib.com/theme/estore/assets/img/categori/product2.png.webp"
              />
              <Card.Body>
                <Card.Text
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                </Card.Text>
                <Card.Title
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  Green Dress with details
                </Card.Title>
                <Card.Text
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <span>$40.00</span>
                  <span>$60.00</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-4">
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://preview.colorlib.com/theme/estore/assets/img/categori/product2.png.webp"
              />
              <Card.Body>
                <Card.Text
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                </Card.Text>
                <Card.Title
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  Green Dress with details
                </Card.Title>
                <Card.Text
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <span>$40.00</span>
                  <span>$60.00</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-4">
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://preview.colorlib.com/theme/estore/assets/img/categori/product2.png.webp"
              />
              <Card.Body>
                <Card.Text
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                </Card.Text>
                <Card.Title
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  Green Dress with details
                </Card.Title>
                <Card.Text
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <span>$40.00</span>
                  <span>$60.00</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-4">
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://preview.colorlib.com/theme/estore/assets/img/categori/product2.png.webp"
              />
              <Card.Body>
                <Card.Text
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                  <IoStarOutline />
                </Card.Text>
                <Card.Title
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  Green Dress with details
                </Card.Title>
                <Card.Text
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <span>$40.00</span>
                  <span>$60.00</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicExample;
