const MainContent = () => {
  return (
    <div className="flex max-sm:flex-col-reverse sm:flex-col-reverse lg:flex-row lg:justify-between lg:pl-14 mt-12 gap-4">
      <div className="flex flex-col gap-8 lg:w-[40%]">
        <p className="font-bold max-sm:text-2xl max-sm:text-center sm:text-2xl lg:text-6xl sm:text-center lg:text-left">
          A Simple Bookmark Manager
        </p>
        <p className="sm:text-md sm:w-[400px] sm:m-auto lg:m-0 lg:text-2xl text-[#b3b5be] lg:w-[80%] max-sm:text-center sm:text-center lg:text-left">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex gap-2 max-sm:m-auto sm:m-auto lg:m-0">
          <button className="w-[180px] h-[60px] font-bold bg-[#5368df] text-white rounded">
            Get It On Chrome
          </button>
          <button className="w-[180px] h-[60px] font-bold bg-[#d1d5db] rounded">
            Get It On Firebox
          </button>
        </div>
      </div>
      <div className="relative max-sm:m-auto sm:m-auto lg:m-0 lg:w-[50%]">
        <div className="max-sm:hidden sm:hidden h-[350px] rounded-l-full bg-[#5368df] w-[500px] mt-[15vh] z-0 absolute right-[0] lg:block"></div>
        <div className="max-sm:m-auto sm:m-auto lg:absolute lg:top-[-50px] lg:right-[150px] ">
          <img
            src={
              "https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-hero.svg"
            }
            className="z-10 max-sm:h-[300px] max-sm:w-[450px] sm:h-[300px] sm:w-[450px] md:h-[400px] w-[600px] lg:h-[450px] lg:w-[700px]"
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
