import { useState } from "react";

const tabs = [
  {
    id: 1,
    heading: "Simple Bookmarking",
    title: "Bookmark in one click",
    content:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    url: "https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-1.svg",
  },
  {
    id: 2,
    heading: "Speedy Searching",
    title: "Intelligent search",
    content:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    url: "https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-2.svg",
  },
  {
    id: 3,
    heading: "Easy Sharing",
    title: "Share your bookmarks",
    content:
      "Easily share your bookmarks and collections with others. Create a shareable a link that you can send at the click of a button.",
    url: "https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-3.svg",
  },
];

const Features = () => {
  const [currTab, setCurrTab] = useState(0);
  return (
    <div className="max-sm:mt-[100px] sm:mt-[100px] lg:mt-[150px] flex flex-col gap-4">
      <div className="flex flex-col gap-4 w-[500px] m-auto">
        <p className="max-sm:text-2xl sm:text-2xl lg:text-4xl m-auto font-bold">
          Features
        </p>
        <p className="max-sm:w-[85%] sm: max-sm:text-md sm:text-md lg:text-lg text-[#b3b5be] m-auto text-center">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div>
        <div className="border-b border-b-slate-300 flex max-sm:flex-col sm:flex-col md:flex-row  justify-between m-auto mt-12 mb-4 md:w-[600px] justify-between">
          {tabs.map((tab, index) => {
            return (
              <>
                {" "}
                <div
                  className={`max-sm:mt-4 sm:mt-4 max-sm:m-auto sm:m-auto pb-4 cursor-pointer hover:text-[#fa5757] text-slate-600 ${
                    currTab === index ? "border-b-[5px] border-b-[#fa5757]" : ""
                  }`}
                  key={tab.id}
                  onClick={() => {
                    setCurrTab(index);
                  }}
                >
                  {tab.heading}
                </div>
                <div className="max-sm:border-b max-sm:border-b-slate-300 sm:border-b sm:border-b-slate-300"></div>
              </>
            );
          })}
        </div>
        <div className="flex justify-between mt-12 max-lg:flex-col max-lg:items-center">
          <div className="relative lg:w-[45%]">
            <div className="max-lg:hidden lg:block h-[300px] rounded-r-full bg-[#5368df] w-[90%] mt-[15vh] z-0 absolute left-[0]"></div>
            <div className="max-sm:w-[80%] max-md:m-auto lg:absolute lg:left-[150px] ">
              <img
                src={tabs[currTab].url + ""}
                className="z-10 max-sm:h-[300px] max-sm:w-[600px] lg:h-[350px] lg:w-[700px]"
              />
            </div>
          </div>
          <div className="max-md:w-[90%] max-md:mt-10 lg:w-[50%] flex flex-col gap-8">
            <p className="max-md:text-center font-semibold text-4xl">
              {tabs[currTab]?.title}
            </p>
            <p className="max-md:text-center lg:w-[60%] text-[#b3b5be]">
              {tabs[currTab]?.content}
            </p>
            <button className="max-md:m-auto w-[180px] h-[60px] font-bold bg-[#5368df] text-white rounded cursor-pointer hover:bg-white hover:border-[2px] hover:border-[#5368df] hover:text-[#5368df]">
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
