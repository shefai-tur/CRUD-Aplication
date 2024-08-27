import React, { useEffect, useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";

import { FaEdit } from "react-icons/fa";

import axios from "axios";
const HomePage = ({ productId, deleteProductID }) => {
  let [data, setData] = useState([]);
  useEffect(() => {
    try {
      async function fatcheData(params) {
        const fatchProduct = await axios.get(
          "http://localhost:5000/api/v1/ReadProduct"
        );
        const response = fatchProduct.data.product;
        setData(response);
      }
      fatcheData();
    } catch (error) {
      console.log(error);
    }
  }, [data]);

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <div className=" bg-blue-700  p-5 flex justify-between">
          <h1 className=" text-white font-bold text-xl">Manage Product</h1>

          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_6").showModal()}
          >
            <div className=" text-white flex bg-slate-600 p-3 ">
              <FaCirclePlus className="mt-1 mr-1" />
              <p> Add New Products</p>
            </div>
          </button>
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

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {data.map((element, index) => {
              return (
                <tr className=" bg-slate-600  ">
                  <th>{element.ProductName}</th>
                  <td>{element.ProductCode}</td>
                  <td>{element.UnitPrice}</td>
                  <td>{element.Qty}</td>
                  <td>{element.TotalPrice}</td>

                  <td className="flex gap-3 p-4">
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <div onClick={() => productId(element._id)}>
                      <button
                        className="btn"
                        onClick={() =>
                          document.getElementById("my_modal_5").showModal()
                        }
                      >
                        <FaEdit className=" text-yellow-400 text-xl" />
                      </button>
                    </div>

                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <div onClick={() => deleteProductID(element._id)}>
                      <button
                        className="btn"
                        onClick={() =>
                          document.getElementById("my_modal_4").showModal()
                        }
                      >
                        <MdDeleteForever className="  text-red-600 text-xl" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
