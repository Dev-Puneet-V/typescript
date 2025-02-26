const Subscription = () => {
  return (
    <div className="text-white bg-[#5368df] max-md:p-12 p-24 w-full flex flex-col align-center justify-center gap-8 mt-16">
      <p className="text-xl m-auto">35,000+ Already Joined</p>
      <p className="max-md:text-2xl text-4xl font-bold m-auto">
        Stay up-to-date with what we're doing
      </p>
      <div className="flex gap-2 m-auto p-2">
        <input
          className="p-2 bg-white text-[#b3b5be] rounded-lg focus:outline-none w-[250px]"
          placeholder="Enter your email address"
        />
        <button className="text-white bg-[#fa5757] rounded-lg p-2 w-[120px] cursor-pointer hover:bg-white hover:border-[2px] hover:border-[#fa5757] hover:text-[#fa5757]">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Subscription;
