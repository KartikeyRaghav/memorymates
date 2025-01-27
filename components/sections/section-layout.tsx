const SectionLayout = ({
  title,
  id,
  children,
}: {
  title: string;
  id: string;
  children: React.ReactNode;
}) => {
  return (
    <div id={id} className="pt-10 md:pt-20 lg:px-32 px-5 md:px-20">
      <p className="lg:text-6xl xl:text-7xl md:text-5xl text-4xl text-center md:text-left mb-8 font-bold">
        {title}
      </p>
      {children}
    </div>
  );
};

export default SectionLayout;
