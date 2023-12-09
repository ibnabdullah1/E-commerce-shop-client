const SectionTitle = ({ heading }) => {
  return (
    <div>
      <h2 className="font-semibold text-3xl text-center">{heading}</h2>
      <div className="flex justify-center items-center gap-1 mt-2">
        <div className="h-[3px]  w-3 bg-[#a8eeb2]"></div>
        <div className="h-[3px] w-6 bg-[#00B207]"></div>
        <div className="h-[3px]  w-3 bg-[#a8eeb2]"></div>
      </div>
    </div>
  );
};

export default SectionTitle;
