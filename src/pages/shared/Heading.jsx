// eslint-disable-next-line react/prop-types
const Heading = ({ question, title }) => {
  return (
    <div className="w-4/5 mx-auto mb-10">
      <p className="primary_black text-base tracking-wide">{question}</p>
      <h3 className="text-4xl primary_black font-bold capitalize">
        Our <span className="brand-text">{title}</span>
      </h3>
      <div className="flex">
        <span className="w-[10%] border-b-2 border-[#469408]"></span>
        <span className="w-[90%] border-b-2 border-[rgba(71,148,8,0.3)]"></span>
      </div>
    </div>
  );
};

export default Heading;
