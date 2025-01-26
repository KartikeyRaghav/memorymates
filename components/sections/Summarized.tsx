import SummList from "../ui/summ-list";

const Summarized = () => {
  return (
    <div id="summarized" className="my-20 lg:px-32 px-20">
      <p className="lg:text-6xl xl:text-7xl md:text-5xl text-4xl text-center md:text-left mb-8 font-bold">Your last 5 unread Emails</p>
      <SummList />
    </div>
  );
};

export default Summarized;
