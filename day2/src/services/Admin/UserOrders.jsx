import React, { useState, useEffect } from 'react';

const OrderDetails = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulating fetching data from JSON
    const fetchData = async () => {
      try {
        // Replace this with your actual JSON data
        const jsonData = {
          "orders": [
            {
              "orderId": 1,
              "userId": 1,
              "productName": "Product A",
              "quantity": 2
            },
            {
              "orderId": 2,
              "userId": 2,
              "productName": "Product B",
              "quantity": 1
            },
            {
              "orderId": 3,
              "userId": 1,
              "productName": "Product C",
              "quantity": 3
            },
            {
              "orderId": 4,
              "userId": 3,
              "productName": "Product A",
              "quantity": 1
            }
          ]
        };
        setOrders(jsonData.orders);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Order Details</h2>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-orange-950 text-left text-xs leading-4 font-medium text-orange-50 uppercase tracking-wider">Order ID</th>
            <th className="px-6 py-3 bg-orange-950 text-left text-xs leading-4 font-medium text-orange-50 uppercase tracking-wider">User ID</th>
            <th className="px-6 py-3 bg-orange-950 text-left text-xs leading-4 font-medium text-orange-50 uppercase tracking-wider">Product Name</th>
            <th className="px-6 py-3 bg-orange-950 text-left text-xs leading-4 font-medium text-orange-50 uppercase tracking-wider">Quantity</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map(order => (
            <tr key={order.orderId}>
              <td className="px-6 py-4 whitespace-no-wrap">{order.orderId}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{order.userId}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{order.productName}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{order.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetails;
