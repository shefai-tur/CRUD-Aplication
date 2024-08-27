import { useState } from "react";
import Crate from "./Components/Crate";
import Delete from "./Components/Delete";
import Update from "./Components/Update";
import HomePage from "./Pages/HomePage";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
function App() {
  const [puid, setPuid] = useState();
  const [deleteID,setDeleteID] = useState()
  let [value, seVtalue] = useState({
    ProductName: "",
    ProductCode: "",
    UnitPrice: "",
    TotalPrice: "",
    Qty: "",
  });
  let handelChange = (e) => {
    seVtalue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  let handelSubmit = async (e) => {
    e.preventDefault();

    try {
      let updateProduct = await axios.put(
        `http://localhost:5000/api/v1/UpdateProduct/${puid}`,
        value
      );
      let response = updateProduct.data;
      console.log(response);

      if (response.succes) {
        toast(response.massage);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const productId = (id) => {
    setPuid(id);
  };

  const deleteProductID =(deletid)=>{
    setDeleteID(deletid);
  
  }
  let handelDeleteSubmit = async()=>{
    try {
      let updateProduct = await axios.delete(
        `http://localhost:5000/api/v1/DeleteProduct/${deleteID}`,
       
      );
      let response = updateProduct.data;
      console.log(response);

      if (response.succes) {
        toast(response.massage);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <HomePage productId={productId} deleteProductID={deleteProductID}  />;
      <Toaster />
      <dialog id="my_modal_6" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <Crate />
        </div>
      </dialog>
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <Update
            value={value}
            handelChange={handelChange}
            handelSubmit={handelSubmit}
          />
        </div>
      </dialog>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <Delete handelDeleteSubmit={handelDeleteSubmit} />
        </div>
      </dialog>
    </>
  );
}

export default App;
