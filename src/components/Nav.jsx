function Nav() {
  return (
    <nav className="flex items-center  bg-[#2B2C37] h-20 w-full text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 min-w-72 py-[27px] border-r-[1.5px] border-[#3E3F4E] border-b-[1.5px] ">
          <img
            className="pl-6 h-6 cursor-pointer"
            src="src\assets\logo-light.svg "
          />
        </div>
      </div>
      <div className="flex items-center justify-between px-8 w-full h-full border-b-[1.5px] border-[#3E3F4E]">
        <h1 className="text-2xl font-bold cursor-pointer font-primary">
          Platform Launch
        </h1>
        <div className="flex items-center justify-between gap-4">
          <button className="bg-[#635FC7] py-3 px-4 rounded-3xl scroll-mr-4 font-bold">
            +Add New Task
          </button>
          <img
            className="cursor-pointer"
            src="src\assets\icon-vertical-ellipsis.svg"
          />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
