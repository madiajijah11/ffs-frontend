import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageBlankChat from "../assets/images/BlankChat.png";

const ChatBlank = () => {
  return (
    <>
      <Navbar />
      <div className="px-2 sm:px-20 py-6 bg-[#E5E5E5]">
        <div className="flex">
          <div className="w-1/4 bg-white rounded-md mr-10 h-[75vh]">
            <h3 className="font-semibold leading-6 bold text-base	p-5">Chat</h3>
            <div className="border-1 border border-[#E2E5ED]"></div>
            <div className="h-full flex flex-col items-center justify-center">
              <img src={ImageBlankChat} alt="Blank Chat"></img>
              <h3 className="text-center font-semibold	text-base	leading-6	">Belum ada chat</h3>
            </div>
          </div>
          <div className="w-3/4 bg-white rounded-md">
            <h3 className="font-semibold leading-6 bold text-base	p-5">coba coba</h3>
            <div className="border-1 border border-[#E2E5ED]"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChatBlank;
