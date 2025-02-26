const Footer = () => {
  return (
    <div className="max-sm:pl-4 bg-[#232B70] p-12 pl-20 flex justify-between">
      <div className="flex items-center text-grey gap-8">
        <img
          className="max-sm:w-[100px] max-sm:h-[20px] w-[150px] h-[25px]"
          src={
            "https://tailwindfromscratch.com/website-projects/bookmark/images/logo-bookmark-footer.svg"
          }
        />
        <p className="max-sm:text-sm text-slate-500 text-lg">FEATURES</p>
        <p className="max-sm:text-sm text-slate-500 text-lg">DOWNLOAD</p>
        <p className="max-sm:text-sm text-slate-500 text-lg">FAQ</p>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
