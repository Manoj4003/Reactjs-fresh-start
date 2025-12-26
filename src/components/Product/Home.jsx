import { useState } from "react";
import "./Home.css";

export default function Home() {
  const [products] = useState([
    { id: 1, title: "Bag", price: 500 },
    { id: 2, title: "Watch", price: 1500 },
    { id: 3, title: "Shoes", price: 2500 }
  ]);

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>🛒 Product Dashboard</h1>
        <button className="add-btn">+ Add Product</button>
      </header>

      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>₹ {p.price}</td>
              <td>
                <button className="update-btn">Update</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
