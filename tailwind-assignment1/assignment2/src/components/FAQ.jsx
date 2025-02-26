import DropDown from "./DropDown";

const faqs = [
  {
    title: "What is Bookmark?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?",
  },
  {
    title: "How can I request a new browser?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?",
  },
  {
    title: "Is ther a mobile app?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?",
  },
  {
    title: "What about other Chromium browsers",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?",
  },
];

const FAQ = () => {
  return (
    <div className="flex flex-col gap-8 m-auto w-[500px] text-center mt-12">
      <p className="font-bold text-2xl">Frequently Asked Questions</p>
      <p className="max-md:w-[80%] max-md:m-auto text-center">
        Here are some of our FAQs. If you have any other questions you'd like
        answered please feel free to email us.
      </p>
      <div className="mt-8">
        {faqs?.map((faq) => {
          return <DropDown {...faq} />;
        })}
      </div>
    </div>
  );
};

export default FAQ;
