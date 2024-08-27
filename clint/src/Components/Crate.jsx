import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const Crate = () => {
  const [value, setValue] = useState({
    ProductName: "",
    ProductCode: "",
    UnitPrice: "",
    Qty: "",
    TotalPrice: "",
  });

  const handaleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const handaleSubmit = async (e) => {
    e.preventDefault();
    try {
      const addProduct = await axios.post(
        "http://localhost:5000/api/v1/CreateProduct",
        value
      );
      let response = addProduct.data;

      if (response.succes) {
        toast(response.message);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" w-80">
      <form >
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow"
          name="ProductName"
          value={value.ProductName}
          onChange={handaleChange}
          placeholder="Product Name	"
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow"
          name="ProductCode"
          value={value.ProductCode}
          onChange={handaleChange}
          placeholder="Product Code		"
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="number"
          className="grow"
          name="UnitPrice"
          value={value.UnitPrice}
          onChange={handaleChange}
          placeholder="Unit Price		"
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="number"
          className="grow"
          name="Qty"
          value={value.Qty}
          onChange={handaleChange}
          placeholder="Qty"
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="number"
          className="grow"
          name="TotalPrice"
          value={value.TotalPrice}
          onChange={handaleChange}
          placeholder="Total Price"
        />
      </label>
      </form>

      <div className="modal-action my-5 flex justify-between">
        <form method="dialog">
          {/* if there is a button, it will close the modal */}
          <button className="btn btn-sm">Cencel</button>
          <button  onClick={handaleSubmit}  className="btn btn-sm btn-info ">
          Submit
        </button>
        </form>
       
        
      </div>
    </div>
  );
};

export default Crate;
