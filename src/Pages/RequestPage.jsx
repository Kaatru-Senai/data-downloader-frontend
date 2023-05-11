import React from "react";
import Plus from "../assets/Vector (1).svg";
import Search from "../assets/Search_request.png";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import JobId from "../assets/job_id.svg";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

const customStyles = {
  overlay: {
    position: "fixed",
    top: "64px",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "45vw",
    height: "35vh",
    padding: 0,
    borderRadius: "10px",
  },
};

function RequestPage() {
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="min-h-screen flex flex-col items-center">
    <Navbar />
      <div className="w-screen flex flex-row items-center justify-center ml-[0%] mt-[10%]">
        <div className="basis-[10%] text-center">
          <p className="font-semibold">Step 1</p>
        </div>
        <div className="basis-4/5 flex-auto p-4 bg-[#B5FFB4] rounded-tl-lg rounded-bl-lg">
          <p className="font-semibold">Select a Request</p>
        </div>
      </div>
      <div className="w-[65vw] h-[45vh] flex justify-center items-center ml-[20%] mr-[20%] mt-[2%]">
        <div className="bg-[#F1F6FF] w-[80%] h-full flex flex-row justify-center items-center flex-auto rounded-lg pl-[20%] pr-[20%] pb-8 pt-8 gap-10">
          <div className="bg-white h-full basis-1/2 flex flex-col justify-center items-center gap-4 cursor-pointer rounded-lg" onClick={()=>navigate('/select-datasource')}>
            <img src={Plus} alt="" width={"40vmin"} />
            <p className="text-center font-semibold">
              New <br></br> Request
            </p>
          </div>
          <div
            className="bg-[#323B4B] h-full basis-1/2 flex flex-col justify-center items-center gap-4 cursor-pointer rounded-lg"
            onClick={openModal}
          >
            <img src={Search} alt="" width={"40vmin"} />
            <p className="text-center font-semibold text-white">
              Track <br></br> Request
            </p>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex flex-row justify-between items-center bg-[#B5FFB4] p-4">
          <h1 className="text-lg font-semibold uppercase">Enter Job ID</h1>
          <AiOutlineClose
            size={30}
            className="cursor-pointer"
            onClick={closeModal}
          />
        </div>
        <div className="flex flex-col w-full h-[80%]">
        <div className="flex flex-row justify-start items-center gap-8 mt-[5%] ml-[5%]">
          <label htmlFor="" className="font-semibold">
            JOB ID :-
          </label>
          <div className="flex flex-row justify-center items-center border-2 pl-2 rounded-lg">
            <img src={JobId} alt="" width={"35vmin"} />
            <div className="h-full w-4 bg-black"></div>
            <input type="text" name="" id="" className="p-2 focus:outline-0" />
          </div>
        </div>
          <div className="w-full flex-auto flex flex-row justify-end p-4 items-end mb-[4%] pr-[4%]">
            <button
              type="submit"
              className="w-auto h-min bg-[#323B4B] text-white px-8 py-3 rounded-lg"
              onClick={() => {
                closeModal();
                navigate('/download');
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default RequestPage;

