// eslint-disable-next-line react/prop-types
const Accordion = ({ title, data, isOpen, toggleAccordion }) => {
  return (
    <div className="">
      <div className="accordion-header">
        <button
          onClick={toggleAccordion}
          className={`shadow-md py-2 mb-4 w-full text-left px-3 text-lg font-medium tracking-wider flex justify-between items-center${
            isOpen
              ? "text-lg brand-bg text-[#fff]"
              : "primary_black hover:bg-[#469408] hover:text-white transition ease-linear duration-700"
          }`}
        >
          {title}{" "}
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>
      {isOpen && <div className="text-base secondary_black mb-5">{data}</div>}
    </div>
  );
};

export default Accordion;
