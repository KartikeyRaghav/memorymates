import SummList from "../ui/summ-list";

const Questions = () => {
  return (
    <div id="questions" className="my-20 lg:px-32 px-20">
      <p className="lg:text-6xl xl:text-7xl md:text-5xl text-4xl text-center md:text-left mb-8 font-bold">
        Questions for you
      </p>
      <SummList />
    </div>
  );
};

export default Questions;
