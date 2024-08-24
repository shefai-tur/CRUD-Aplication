import React, { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";

import { FaEdit } from "react-icons/fa";
import Delete from "../Components/Delete";
import Crate from "../Components/Crate";
import Update from "../Components/Update";
const HomePage = () => {
  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <div className=" bg-blue-700  p-5 flex justify-between">
          <h1 className=" text-white font-bold text-xl">Manage Product</h1>

          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            <div className=" text-white flex bg-slate-600 p-3 ">
              <FaCirclePlus className="mt-1 mr-1" />
              <p> Add New Products</p>
            </div>
          </button>

          <dialog id="my_modal_5" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <Crate />
            </div>
          </dialog>
        </div>
        <table className="table  ">
          {/* head */}
          <thead>
            <tr className="  text-lg">
              <th>Product Name</th>
              <th>Product Code</th>
              <th>Unit Price</th>
              <th>Qty</th>
              <th>Total Price</th>
              <th>Crated Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            <tr className=" bg-slate-600  text-center">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td className="flex justify-center gap-3 p-4">
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="btn"
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                >
                  <FaEdit className=" text-yellow-400 text-xl" />
                </button>

                <dialog id="my_modal_5" className="modal">
                  <div className="modal-box w-11/12 max-w-5xl">
                    <Update />
                  </div>
                </dialog>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="btn"
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                >
                  <MdDeleteForever className=" text-red-600 text-xl" />
                </button>

                <dialog id="my_modal_4" className="modal">
                  <div className="modal-box w-11/12 max-w-5xl">
                    <Delete />
                  </div>
                </dialog>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
