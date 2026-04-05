import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Loading } from "../components/Loading";

const Orders = () => {
  const [orders, setorders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("/orders");
        setorders(res.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const handleDeleteOrder = async (id) => {
    try {
      await axios.delete(`/orders/${id}`);
      setorders((prevOrders) => prevOrders.filter((order) => order._id !== id));
      toast.success("Order deleted successfully");
    } catch (error) {
      toast.error("Failed to delete order");
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (orders.length === 0) {
    return (
      <div className="h-full flex flex-col items-center justify-center px-4">
        <p className="text-gray-400 text-sm mb-6">
          You haven't placed any orders today
        </p>
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-2.5 rounded-sm text-sm"
        >
          Get started
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-white rounded shadow-sm">
      <table className="w-full border-collapse min-w-[600px]">
        <thead>
          <tr className="border-b border-t border-gray-200">
            <th className="text-left text-xs font-normal text-gray-500 py-3 px-3">
              Instrument
            </th>
            <th className="text-right text-xs font-normal text-gray-500 py-3 px-3">
              Qty.
            </th>
            <th className="text-right text-xs font-normal text-gray-500 py-3 px-3">
              Price
            </th>
            <th className="text-right text-xs font-normal text-gray-500 py-3 px-3">
              Mode
            </th>
            <th className="text-right text-xs font-normal text-gray-500 py-3 px-3">
              Date
            </th>
            <th className="text-right text-xs font-normal text-gray-500 py-3 px-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order._id}
              className="border-b border-gray-100 hover:bg-gray-50"
            >
              <td className="text-sm text-gray-700 py-3 px-3">{order.name}</td>
              <td className="text-right text-sm text-gray-700 py-3 px-3">
                {order.qty}
              </td>
              <td className="text-right text-sm text-gray-700 py-3 px-3">
                ₹{order.price}
              </td>
              <td className="text-right py-3 px-3">
                <span
                  className={`text-xs px-2 py-1 rounded-sm font-medium ${
                    order.mode === "BUY"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-orange-100 text-orange-600"
                  }`}
                >
                  {order.mode}
                </span>
              </td>
              <td className="text-right text-xs text-gray-400 py-3 px-3">
                {new Date(order.createdAt).toLocaleDateString()}
              </td>
              <td className="text-right py-3 px-3">
                <button
                  onClick={() => handleDeleteOrder(order._id)}
                  className="text-red-400 hover:text-red-600 text-xs transition-colors"
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
