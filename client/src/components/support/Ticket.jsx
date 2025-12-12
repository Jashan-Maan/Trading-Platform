import { IoIosSearch } from "react-icons/io";

const Ticket = () => {
  return (
    <section className="bg-gray-50 pt-7 md:pt-10 pb-12">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-7">
          <h1 className="text-xl md:text-4xl text-gray-800 font-semibold leading-tight">
            Support Portal
          </h1>

          <div className="flex items-center gap-6">
            <button className="bg-[#387ed1] text-white px-4 py-2 rounded text-base font-medium hover:bg-[#2b64a8] transition-colors">
              My tickets
            </button>
          </div>
        </div>

        <div className="relative w-full">
          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
            <IoIosSearch className="text-xl" />
          </div>

          <input
            type="text"
            className="w-full h-14 pl-14 pr-4 rounded bg-white shadow-sm  outline-none border-none text-sm md:text-base  placeholder-gray-400 font-light"
            placeholder="Eg: How do I open my account, How do i activate F&O..."
          />
        </div>
      </div>
    </section>
  );
};

export default Ticket;
