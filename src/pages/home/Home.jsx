import { Link } from "react-router-dom";
import ecommerce from "../../assets/images/ecommerce.svg";
import about1 from "../../assets/images/about.jpg";
import about2 from "../../assets/images/about-2.jpeg";
import about3 from "../../assets/images/about-3.jpg";

import Heading from "../shared/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";

const Home = () => {
  const previewData = [1, 2, 3];
  var settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <>
      {/* Banner section */}
      <div className="home-banner">
        <div className="w-4/5 mx-auto pt-48">
          <h3 className="primary_black text-base">
            We will make your dreams come true
          </h3>
          <h1 className="primary_black text-5xl mt-5 font-bold">
            We do things <span className="text-green-600">differently</span>
          </h1>
          <p className="secondary_black text-base mt-5 md:pr-[300px]">
            Webster is the most enticing, creative, modern and multipurpose
            Premium HTML5 Template suitable for any business or corporate
            websites.
          </p>
          <Link to={"#"}>
            <span className="uppercase text-xs text-white bg-green-600 font-medium inline-block cursor-pointer tracking-wider py-3 px-5 mt-5">
              Read more
            </span>
          </Link>
        </div>
      </div>
      {/* Call to action section */}
      <div className="bg-green-600 w-4/5 mx-auto px-12 py-7 relative -mt-[70px] z-50 shadow-2xl">
        <div className="flex justify-between items-center ">
          <h4 className="text-3xl text-white font-semibold">
            <span className="font-bold">Infocyph:</span> The most powerful
            template ever on the marker
          </h4>
          <button className="text-xs font-medium uppercase text-center cursor-pointer tracking-wider align-middle py-2 px-5 flex items-center justify-center gap-1 border-[3px] border-white text-white transition duration-800 ease-in hover:bg-white hover:text-green-600">
            Contact Now{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-3"
            >
              <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
            </svg>
          </button>
        </div>
      </div>
      {/* about us */}
      <div className="w-4/5 mx-auto grid grid-cols-2 gap-5 mt-20">
        <Slider {...settings}>
          <div className="image-container">
            <img src={about1} alt="" className="image w-full" />
            <div className="overlay"></div>
          </div>
          <div className="image-container">
            <img src={about2} alt="" className="image w-full" />
            <div className="overlay"></div>
          </div>
          <div className="image-container">
            <img src={about3} alt="" className="image w-full" />
            <div className="overlay"></div>
          </div>
        </Slider>

        <div>
          <div className="">
            <p className="primary_black text-base tracking-wide">
              Who we are and what we do?
            </p>
            <h3 className="text-4xl primary_black font-bold capitalize">
              See Our{" "}
              <span className="text-green-600">Get to know us better</span>
            </h3>
            <div className="flex">
              <span className="w-[10%] border-b-2 border-green-600"></span>
              <span className="w-[90%] border-b-2 border-green-100"></span>
            </div>
          </div>
          <div>
            <h4 className="mt-5 text-2xl secondary_black">
              We truly care about our users and our product. We are dedicated to
              providing you with the best experience possible.
            </h4>
            <p className="mt-8 text-base secondary_black">
              Let&apos;s make something great together consectetur adipisicing
              elit. Webster conseqt quibusdam, enim expedita sed quia nesciunt.
              Vero quod conseqt quibusdam, enim expedita sed quia nesciunt
              incidunt accusamus necessitatibus
            </p>
          </div>
        </div>
      </div>

      {/* Mission and Motivation */}
      <div className="w-4/5 mx-auto my-20">
        <div>
          <div className="flex gap-2">
            <div className="flex-1 home-mission-left">
              <div className="z-30 mt-10">
                <h1 className="text-3xl font-semibold primary_black capitalize">
                  Infocyph mission that empowers you...
                </h1>
                <p className="secondary_black my-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat amet voluptate fugiat inventore dicta magni tenetur
                  debitis! Officiis voluptate corrupti quisquam sint nam!
                </p>
                <Link to={"#"}>
                  <span className="uppercase text-xs text-white bg-green-600 font-medium inline-block cursor-pointer tracking-wider py-3 px-5 mt-5">
                    Read more
                  </span>
                </Link>
              </div>
            </div>
            <div className="home-mission flex-none"></div>
          </div>
          <div className="flex gap-2">
            <div className="home-motivation flex-none"></div>
            <div className="flex-1 home-motivation-left">
              <div className="mt-10">
                <h1 className="text-3xl font-semibold primary_black capitalize">
                  Infocyph Motivation that empowers you...
                </h1>
                <p className="secondary_black my-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat amet voluptate fugiat inventore dicta magni tenetur
                  debitis! Officiis voluptate corrupti quisquam sint nam!
                </p>
                <Link to={"#"}>
                  <span className="uppercase text-xs text-white bg-green-600 font-medium inline-block cursor-pointer tracking-wider py-3 px-5 mt-5">
                    Read more
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our previous works */}
      <Heading
        question={"Do you want to know about our product quality?"}
        title={"previous work"}
      />
      <div className="w-4/5 mx-auto grid grid-cols-3 gap-6 mb-20">
        {previewData.map((i) => (
          <div key={i} className="p-5 shadow-lg">
            <img
              className="border-green-600 border-b-2 pb-3"
              src={ecommerce}
              alt=""
            />
            <div>
              <h4 className="text-xl font-bold mt-5 mb-3">
                E-commerce web site
              </h4>
              <p className="secondary_black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis magnam hic eum voluptatum beatae architecto.
              </p>
              <Link
                className="bg-green-600 hover:bg-white border-2 border-white hover:border-green-600 hover:text-green-600 text-white font-semibold text-xl py-2 px-5 block text-center uppercase mt-4 transition ease-in-out duration-700"
                to="/preview"
              >
                Preview
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* services */}
      <Heading
        question={"What do we serve to our clients?"}
        title={"services"}
      />
      <div className="w-4/5 mx-auto grid grid-cols-3 gap-5 my-20">
        <div className="flex items-center gap-4 p-5 shadow-lg hover:shadow-green-300 transition ease-in-out duration-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-16 flex-none"
          >
            <path
              fillRule="evenodd"
              d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>

          <div className="border-l-2 border-green-600 pl-2">
            <h4 className="text-xl primary_black capitalize font-semibold">
              Web development
            </h4>
            <p className="text-base secondary_black mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              laudantium.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-5 shadow-lg hover:shadow-green-300 transition ease-in-out duration-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-16 flex-none"
          >
            <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
            <path
              fillRule="evenodd"
              d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z"
              clipRule="evenodd"
            />
          </svg>

          <div className="border-l-2 border-green-600 pl-2">
            <h4 className="text-xl primary_black capitalize font-semibold">
              App development
            </h4>
            <p className="text-base secondary_black mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              laudantium.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-5 shadow-lg hover:shadow-green-300 transition ease-in-out duration-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-16 flex-none"
          >
            <path
              fillRule="evenodd"
              d="M1.5 10.5a3 3 0 0 1 3-3h15a3 3 0 1 1 0 6h-15a3 3 0 0 1-3-3Zm15 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4.5 15a3 3 0 1 0 0 6h15a3 3 0 1 0 0-6h-15Zm11.25 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM19.5 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              clipRule="evenodd"
            />
          </svg>

          <div className="border-l-2 border-green-600 pl-2">
            <h4 className="text-xl primary_black capitalize font-semibold">
              Server Config
            </h4>
            <p className="text-base secondary_black mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              laudantium.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-5 shadow-lg hover:shadow-green-300 transition ease-in-out duration-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-16 flex-none"
          >
            <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
          </svg>

          <div className="border-l-2 border-green-600 pl-2">
            <h4 className="text-xl primary_black capitalize font-semibold">
              Domain & Hosting
            </h4>
            <p className="text-base secondary_black mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              laudantium.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-5 shadow-lg hover:shadow-green-300 transition ease-in-out duration-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-16 flex-none"
          >
            <path
              fillRule="evenodd"
              d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>

          <div className="border-l-2 border-green-600 pl-2">
            <h4 className="text-xl primary_black capitalize font-semibold">
              Security Service
            </h4>
            <p className="text-base secondary_black mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              laudantium.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-5 shadow-lg hover:shadow-green-300 transition ease-in-out duration-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-16 flex-none"
          >
            <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
            <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
            <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
            <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
          </svg>

          <div className="border-l-2 border-green-600 pl-2">
            <h4 className="text-xl primary_black capitalize font-semibold">
              API & DB Development
            </h4>
            <p className="text-base secondary_black mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              laudantium.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
