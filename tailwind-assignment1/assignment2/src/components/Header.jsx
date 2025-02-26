const Header = () => {
  return (
    <div className="flex justify-between w-full p-14 items-center">
      <img
        className="w-[150px] h-[25px]"
        src={
          "https://tailwindfromscratch.com/website-projects/bookmark/images/logo-bookmark.svg"
        }
      />
      <div className="max-sm:hidden">
        <ul className="flex items-center gap-8 font-medium">
          <li className="text-[#b3b5be] text-[1.1rem] cursor-pointer">
            Features
          </li>
          <li className="text-[#b3b5be] text-[1.1rem] cursor-pointer">
            Download
          </li>
          <li className="text-[#b3b5be] text-[1.1rem] cursor-pointer">FAQ</li>
          <li>
            <button className="text-white bg-[#fa5757] rounded-lg p-2 w-[120px] cursor-pointer hover:bg-white border-[2px] hover:border-[#fa5757] hover:text-[#fa5757]">
              Login
            </button>
          </li>
        </ul>
      </div>
      <div className="sm:hidden cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
