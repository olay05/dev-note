import React, { useState } from "react";
import line from "../images/Line 1.svg";
import Swal from 'sweetalert2'


export default function AddNotes({ onSave }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title && !description) {
      // alert("Fill in your title and description or close the form!");
      Swal.fire({
        title: 'success!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    } else if (!title && description) {
      // alert("Fill in your title!");
      Swal.fire({
        title: 'success!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Cool'
      })

    } else if (title && !description) {
      // alert("Fill in your description!");
      Swal.fire({
        title: 'success!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Cool'
      })

    } else {
      onSave({ title, description });
    }
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="">
        <input
          type="text"
          placeholder="| Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="h-14 w-full rounded-[5px] outline-none px-6"
        />
      </div>
      <img src={line} alt="" className="mb-2 mt-3 w-full" />
      <div className="">
        <textarea
          className="h-14 w-full rounded-[5px] outline-none px-6"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="flex justify-end pr-6 mt-40">
        <button className="bg-[#FB6900] text-white px-6 py-2 rounded-[5px] ">
          Save
        </button>
      </div>
    </form>
  );
}