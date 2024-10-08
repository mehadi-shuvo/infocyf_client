import "./service.css";
import img from "../../assets/images/about-3.jpg";
import { serviceConstant } from "./service.constant";
import Heading from "../shared/Heading";

const Service = () => {
  return (
    <div>
      <div className="page-banner py-20">
        <div className="w-4/5 mx-auto">
          <h3 className="text-4xl primary_black uppercase font-bold pt-12">
            Infocyf <span className="brand-text">services</span>
          </h3>
          <p className="text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur, minus.
          </p>
        </div>
      </div>

      {/* services */}
      <div className="w-4/5 mx-auto">
        {serviceConstant.serviceData.map((item) => (
          <div key={item.serial} className="grid md:grid-cols-2 gap-5 mb-8">
            <div
              className={`relative ${
                item.serial % 2 === 0 ? "order-2" : "order-1"
              }`}
            >
              <div
                className={`${
                  item.serial % 2 === 0 ? "text-left pl-4" : "text-right pr-4"
                }`}
              >
                <h3 className="text-3xl font-medium brand-text mt-10 mb-5 z-10">
                  {item.title}
                </h3>
                <p
                  className={`z-10 secondary_black text-sm mb-4 ${
                    item.serial % 2 === 0 ? "ml-5" : "mr-5"
                  } opacity-100 relative`}
                >
                  {item.description}
                </p>
                <b
                  className={`service-number ${
                    item.serial % 2 === 0 ? "left-0" : "right-0"
                  }`}
                >
                  0{item.serial}
                </b>
                <ul
                  className={`list-none secondary_black z-10 ${
                    item.serial % 2 === 0
                      ? "border-l-8 pl-3 ml-5"
                      : "border-r-8 pr-3 mr-5"
                  } border-[#469408]  py-3 grid gap-4 relative`}
                >
                  {item.features.map((feature) => (
                    <li key={feature} className="relative">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className={`mt-8 md:mt-0 relative ${
                item.serial % 2 === 0 ? "order-1" : "order-2"
              }`}
            >
              <img className="w-full h-auto" src={img} alt="Web Design" />
            </div>
          </div>
        ))}
      </div>

      <div>
        <Heading
          question={"Get to know us better."}
          title={"special service"}
        />
        <div className="w-4/5 mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex border p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[10rem] brand-text md:-mt-10"
              >
                <path d="M5.625 3.75a2.625 2.625 0 1 0 0 5.25h12.75a2.625 2.625 0 0 0 0-5.25H5.625ZM3.75 11.25a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75ZM3 15.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75ZM3.75 18.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z" />
              </svg>

              <div className="ml-3">
                <h5 className="text-lg primary_black tracking-wider font-semibold">
                  Many Style Available
                </h5>
                <p className="mb-0 mt-2 secondary_black text-base">
                  Dolor sit consectetur conseqt quibusdam, enim expedita sed
                  quia nesciunt sit consectetur conseqt quibusdam, enim expedita
                  sed quia nesciunt
                </p>
              </div>
            </div>

            <div className="flex border p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[10rem] brand-text md:-mt-10"
              >
                <path
                  fillRule="evenodd"
                  d="M19.449 8.448 16.388 11a4.52 4.52 0 0 1 0 2.002l3.061 2.55a8.275 8.275 0 0 0 0-7.103ZM15.552 19.45 13 16.388a4.52 4.52 0 0 1-2.002 0l-2.55 3.061a8.275 8.275 0 0 0 7.103 0ZM4.55 15.552 7.612 13a4.52 4.52 0 0 1 0-2.002L4.551 8.45a8.275 8.275 0 0 0 0 7.103ZM8.448 4.55 11 7.612a4.52 4.52 0 0 1 2.002 0l2.55-3.061a8.275 8.275 0 0 0-7.103 0Zm8.657-.86a9.776 9.776 0 0 1 1.79 1.415 9.776 9.776 0 0 1 1.414 1.788 9.764 9.764 0 0 1 0 10.211 9.777 9.777 0 0 1-1.415 1.79 9.777 9.777 0 0 1-1.788 1.414 9.764 9.764 0 0 1-10.212 0 9.776 9.776 0 0 1-1.788-1.415 9.776 9.776 0 0 1-1.415-1.788 9.764 9.764 0 0 1 0-10.212 9.774 9.774 0 0 1 1.415-1.788A9.774 9.774 0 0 1 6.894 3.69a9.764 9.764 0 0 1 10.211 0ZM14.121 9.88a2.985 2.985 0 0 0-1.11-.704 3.015 3.015 0 0 0-2.022 0 2.985 2.985 0 0 0-1.11.704c-.326.325-.56.705-.704 1.11a3.015 3.015 0 0 0 0 2.022c.144.405.378.785.704 1.11.325.326.705.56 1.11.704.652.233 1.37.233 2.022 0a2.985 2.985 0 0 0 1.11-.704c.326-.325.56-.705.704-1.11a3.016 3.016 0 0 0 0-2.022 2.985 2.985 0 0 0-.704-1.11Z"
                  clipRule="evenodd"
                />
              </svg>

              <div className="ml-3">
                <h5 className="text-lg primary_black tracking-wider font-semibold">
                  Fast Customer Support
                </h5>
                <p className="mb-0 mt-2 secondary_black text-base">
                  Dolor sit consectetur conseqt quibusdam, enim expedita sed
                  quia nesciunt sit consectetur conseqt quibusdam, enim expedita
                  sed quia nesciunt
                </p>
              </div>
            </div>

            <div className="flex border p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[10rem] brand-text md:-mt-10"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
                  clipRule="evenodd"
                />
              </svg>

              <div className="ml-3">
                <h5 className="text-black font-bold">Our Company</h5>
                <p className="mb-0 mt-2 secondary_black text-base">
                  Dolor sit consectetur conseqt quibusdam, enim expedita sed
                  quia nesciunt sit consectetur conseqt quibusdam, enim expedita
                  sed quia nesciunt
                </p>
              </div>
            </div>

            <div className="flex border p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[10rem] brand-text md:-mt-10"
              >
                <path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 0 1-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 0 1 6.126 3.537ZM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 0 1 0 .75l-1.732 3c-.229.397-.76.5-1.067.161A5.23 5.23 0 0 1 6.75 12a5.23 5.23 0 0 1 1.37-3.536ZM10.878 17.13c-.447-.098-.623-.608-.394-1.004l1.733-3.002a.75.75 0 0 1 .65-.375h3.465c.457 0 .81.407.672.842a5.252 5.252 0 0 1-6.126 3.539Z" />
                <path
                  fillRule="evenodd"
                  d="M21 12.75a.75.75 0 1 0 0-1.5h-.783a8.22 8.22 0 0 0-.237-1.357l.734-.267a.75.75 0 1 0-.513-1.41l-.735.268a8.24 8.24 0 0 0-.689-1.192l.6-.503a.75.75 0 1 0-.964-1.149l-.6.504a8.3 8.3 0 0 0-1.054-.885l.391-.678a.75.75 0 1 0-1.299-.75l-.39.676a8.188 8.188 0 0 0-1.295-.47l.136-.77a.75.75 0 0 0-1.477-.26l-.136.77a8.36 8.36 0 0 0-1.377 0l-.136-.77a.75.75 0 1 0-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 0 0-1.3.75l.392.678a8.29 8.29 0 0 0-1.054.885l-.6-.504a.75.75 0 1 0-.965 1.149l.6.503a8.243 8.243 0 0 0-.689 1.192L3.8 8.216a.75.75 0 1 0-.513 1.41l.735.267a8.222 8.222 0 0 0-.238 1.356h-.783a.75.75 0 0 0 0 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 0 0 .513 1.41l.735-.268c.197.417.428.816.69 1.191l-.6.504a.75.75 0 0 0 .963 1.15l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 0 0 1.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.77a.75.75 0 0 0 1.477.261l.137-.772a8.332 8.332 0 0 0 1.376 0l.136.772a.75.75 0 1 0 1.477-.26l-.136-.771a8.19 8.19 0 0 0 1.294-.47l.391.677a.75.75 0 0 0 1.3-.75l-.393-.679a8.29 8.29 0 0 0 1.054-.885l.601.504a.75.75 0 0 0 .964-1.15l-.6-.503c.261-.375.492-.774.69-1.191l.735.267a.75.75 0 1 0 .512-1.41l-.734-.267c.115-.439.195-.892.237-1.356h.784Zm-2.657-3.06a6.744 6.744 0 0 0-1.19-2.053 6.784 6.784 0 0 0-1.82-1.51A6.705 6.705 0 0 0 12 5.25a6.8 6.8 0 0 0-1.225.11 6.7 6.7 0 0 0-2.15.793 6.784 6.784 0 0 0-2.952 3.489.76.76 0 0 1-.036.098A6.74 6.74 0 0 0 5.251 12a6.74 6.74 0 0 0 3.366 5.842l.009.005a6.704 6.704 0 0 0 2.18.798l.022.003a6.792 6.792 0 0 0 2.368-.004 6.704 6.704 0 0 0 2.205-.811 6.785 6.785 0 0 0 1.762-1.484l.009-.01.009-.01a6.743 6.743 0 0 0 1.18-2.066c.253-.707.39-1.469.39-2.263a6.74 6.74 0 0 0-.408-2.309Z"
                  clipRule="evenodd"
                />
              </svg>

              <div className="ml-3">
                <h5 className="text-lg primary_black tracking-wider font-semibold">
                  Customizability
                </h5>
                <p className="mb-0 mt-2 secondary_black text-base">
                  Dolor sit consectetur conseqt quibusdam, enim expedita sed
                  quia nesciunt sit consectetur conseqt quibusdam, enim expedita
                  sed quia nesciunt
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
