import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import SearchFilter from "./SearchFilter";
import Select from "react-select";

const Users = () => {
  const [responseData, setResponseData] = useState([]);
  const [orderData, setOrderData] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    status: { value: "", label: "" },
    description: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const LoginForm = () => {
    const [responseData, setResponseData] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        fetchData();
      }, []);

      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/login-page`,
            {
              headers: {
                "ngrok-skip-browser-warning": "69420",
              },
            }
          );
          setResponseData(response.data);
        } catch (error) {
          console.error("Error fetching product data:", error);
        }
      };
  // Other functions such as getLocation, onEditClick, onSubmit, handleInputChange, handleDescriptionChange, handleCloseForm can remain the same

  return (
    <div className="app-container">
      <Sidebar />
      <div className="app-content">
        {/* Your header and other UI elements */}
        <SearchFilter />
        {/* Your popup form */}
        {/* Your product list */}
      </div>
    </div>
  );
};

export default PurchaseOrder;
