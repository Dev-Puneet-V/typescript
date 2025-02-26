const Extension = ({ url, platform, minimumVersion }) => {
  return (
    <div className="max-md:mt-12 max-md:m-auto gap-4 shadow-lg flex flex-col items-center w-[300px] rounded">
      <img src={url} className="ml-8 mr-8" />
      <p className="ml-8 mr-8 mt-4 font-bold text-xl">{"Add to " + platform}</p>
      <p className="text-[#b3b5be]">Minimum Version {" " + minimumVersion}</p>
      <div className="w-full flex justify-between items-center">
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
          11, 12,
        ].map((key) => (
          <div
            key={key}
            className="rounded-full h-[3px] w-[3px] bg-[#b3b5be]"
          ></div>
        ))}
      </div>
      <button className="mb-4 w-[220px] h-[50px] font-semibold bg-[#5368df] text-white rounded-lg cursor-pointer hover:bg-white hover:border-[2px] hover:border-[#5368df] hover:text-[#5368df]">
        Add & Install Extension
      </button>
    </div>
  );
};

export default Extension;
