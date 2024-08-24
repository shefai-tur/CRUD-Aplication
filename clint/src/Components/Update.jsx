import React from "react";

const Update = () => {
  return (
    <div className=" w-80">
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Product Name	" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Product Code		" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Unit Price		" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Total Price" />
      </label>
      <div className="modal-action my-5 flex justify-between">
        <form method="dialog">
          {/* if there is a button, it will close the modal */}
          <button className="btn-sm">Cencel</button>
        </form>
        <button className="btn btn-sm btn-error">Update</button>
      </div>
    </div>
  );
};

export default Update;
