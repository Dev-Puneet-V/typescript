import Extension from "./Extension";

const extensions = [
  {
    url: "https://tailwindfromscratch.com/website-projects/bookmark/images/logo-chrome.svg",
    platform: "Chrome",
    minimumVersion: "62",
  },
  {
    url: "https://tailwindfromscratch.com/website-projects/bookmark/images/logo-firefox.svg",
    platform: "Firefox",
    minimumVersion: "55",
  },
  {
    url: "https://tailwindfromscratch.com/website-projects/bookmark/images/logo-opera.svg",
    platform: "Opera",
    minimumVersion: "46",
  },
];

const ExtensionSection = () => {
  return (
    <div className="max-md:mt-24 flex flex-col items-center lg:mt-60 gap-4">
      <p className="font-bold text-4xl m-auto">Download the extension</p>
      <p className="max-md:w-[80%] text-[#b3b5be] w-[500px] text-center">
        We've got more browsers in the pipeline. Please do let us know if you've
        got a favourite you'd like us to prioritize.
      </p>
      <div className="max-md:m-auto flex gap-4 mt-16 mb-4 flex-wrap">
        {extensions?.map((extension, index) => {
          return <Extension {...extension} />;
        })}
      </div>
    </div>
  );
};

export default ExtensionSection;
