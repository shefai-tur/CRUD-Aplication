import axios from "axios";
import React, { useState } from "react";
const Update = ({ value, handelChange, handelSubmit }) => {
  return (
    <div className=" w-80">
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          name="ProductName"
          value={value.ProductName}
          onChange={handelChange}
          className="grow"
          placeholder="Product Name	"
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          name="ProductCode"
          value={value.ProductCode}
          onChange={handelChange}
          className="grow"
          placeholder="Product Code		"
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="number"
          name="UnitPrice"
          value={value.UnitPrice}
          onChange={handelChange}
          className="grow"
          placeholder="Unit Price		"
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="number"
          name="Qty"
          value={value.Qty}
          onChange={handelChange}
          className="grow"
          placeholder="Qty		"
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="number"
          name="TotalPrice"
          value={value.TotalPrice}
          onChange={handelChange}
          className="grow"
          placeholder="Total Price"
        />
      </label>
      <div>
        <div className="modal-action ">
          <form method="dialog ">
            {/* if there is a button, it will close the modal */}
            <button className="btn btn-sm">Cencel</button>
            <button onClick={handelSubmit} className=" btn btn-sm btn-warning">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
