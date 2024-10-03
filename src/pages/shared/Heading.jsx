// eslint-disable-next-line react/prop-types
const Heading = ({ question, title }) => {
  return (
    <div className="w-4/5 mx-auto mb-10">
      <p className="primary_black text-base tracking-wide">{question}</p>
      <h3 className="text-4xl primary_black font-bold capitalize">
        See Our <span className="text-green-600">{title}</span>
      </h3>
      <div className="flex">
        <span className="w-[10%] border-b-2 border-green-600"></span>
        <span className="w-[90%] border-b-2 border-green-100"></span>
      </div>
    </div>
  );
};

export default Heading;
