import React, { useState, useEffect } from 'react';

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    categoryId: ''
  });
  const [editingProduct, setEditingProduct] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleAddProduct = () => {
    fetch('http://localhost:3001/addProduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("token"),
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((products) => {
        setProducts((prevProducts) => [...prevProducts]);
        setNewProduct({ name: '', price: '', categoryId: '' });
        console.log(products.success)
      });
  };
  const handleDeleteProduct = (productId) => {
    fetch(`http://localhost:3001/deleteProduct/${productId}`, {
      method: 'DELETE',
      headers:{
        'Authorization': localStorage.getItem("token")
      }})
      .then((response) => response.json())
      .then((products) => {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );
        console.log(products.success)
      });
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setNewProduct(product);
  };

  const handleUpdateProduct = () => {
    fetch(`http://localhost:3001/changeProduct/${editingProduct.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("token"),
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === data.id ? data : product
          )
        );
        setEditingProduct(null);
        console.log(data.success)
        setNewProduct({ name: '', price: '', categoryId: ''});
        
      });
  };

  return (
    <div>
      <h1>Product Table</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category_id}</td>
              <td>
                <button onClick={() => handleEditProduct(product)}>
                  Edit
                </button>
                <button onClick={() => handleDeleteProduct(product.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add Product</h2>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Product Price"
          value={newProduct.price}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="categoryId"
          placeholder="Category Id"
          value={newProduct.categoryId}
          onChange={handleInputChange}
        />
        {editingProduct ? (
          <button onClick={handleUpdateProduct}>Update</button>
        ) : (
          <button onClick={handleAddProduct}>Add</button>
        )}
      </div>
    </div>
  );
};

export default ProductTable;
 