function Nav({ showSideBar }) {
  return (
    <nav className="flex h-20  w-full items-center bg-[#2b2c37] text-white">
      <div className="flex items-center justify-between">
        <div
          className={`flex min-w-72 items-center gap-3 ${
            showSideBar ? "border-b-[1.5px]" : ""
          }  border-r-[1.5px] border-[#3E3F4E] py-[27px]`}
        >
          <img
            className="h-6 cursor-pointer pl-6"
            src="src\assets\logo-light.svg "
          />
        </div>
      </div>
      <div className="flex h-full w-full items-center justify-between border-b-[1.5px] border-[#3E3F4E] px-8">
        <h1 className="cursor-pointer font-primary text-2xl font-bold">
          Platform Launch
        </h1>
        <div className="flex items-center justify-between gap-4">
          <button className="scroll-mr-4 rounded-3xl bg-[#635FC7] px-4 py-3 font-bold">
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
