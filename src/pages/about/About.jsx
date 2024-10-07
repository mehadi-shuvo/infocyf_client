import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./about.css";
import Heading from "../shared/Heading";
import Slider from "react-slick/lib/slider";
import { technologyIcons } from "../shared/technology";
import { useState } from "react";
import Accordion from "./Accordion";
import skill from "../../assets/images/undraw_programming_re_kg9v.svg";
import security from "../../assets/images/security.jpg";

const About = () => {
  const SliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };

  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "Web Development Services",
      data: `We offer professional web development services, creating responsive and dynamic websites using the latest technologies like HTML, CSS, JavaScript, React, Node.js, and more.`,
      isOpen: true,
    },
    {
      key: 2,
      title: "Security Solutions",
      data: `Our security services include website and server protection, vulnerability assessments, data encryption, and compliance with industry standards to ensure the safety of your digital assets.`,
      isOpen: false,
    },
    {
      key: 3,
      title: "API Development and Integration",
      data: `We specialize in developing and integrating RESTful and GraphQL APIs that facilitate smooth communication between different systems and platforms.`,
      isOpen: false,
    },
    {
      key: 4,
      title: "Server Configuration and Management",
      data: `We provide comprehensive server configuration and management services, including cloud server setup, database management, and performance optimization for seamless operation.`,
      isOpen: false,
    },
  ]);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };
  return (
    <div>
      <div className="about-banner py-20">
        <div className="w-4/5 mx-auto">
          <h3 className="text-4xl primary_black uppercase font-bold pt-12">
            About <span className="brand-text">Infocyf</span>
          </h3>
          <p className="text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur, minus.
          </p>
        </div>
      </div>

      <section className="pt-20">
        <div className="w-4/5 mx-auto">
          <div className="grid md: grid-cols-3 gap-5">
            <div className="">
              <img className="w-full h-auto" src={security} alt="Who we are" />
              <h4 className="mt-5 text-xl font-normal tracking-wider primary_black">
                Who we are
              </h4>
              <p className="mt-2 text-base secondary_black">
                Nesciunt incidunt accusamus necessitatibus modi adipisci officia
                enim expedita sed.
              </p>
            </div>
            <div className="">
              <img className="w-full h-auto" src={security} alt="What we do" />
              <h4 className="mt-5 text-xl font-normal tracking-wider primary_black">
                What we do
              </h4>
              <p className="mt-2 text-base secondary_black">
                Vero quod conseqt quibusdam, enim expedita dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </div>
            <div className="">
              <img
                className="w-full h-auto"
                src={security}
                alt="Why choose us"
              />
              <h4 className="mt-5 text-xl font-normal tracking-wider primary_black">
                Why choose us
              </h4>
              <p className="mt-2 text-base secondary_black">
                Expedita sed quia nesciunt incidunt accusamus dolor sit amet,
                consectetur adipisicing.
              </p>
            </div>
          </div>
        </div>
      </section>

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

      {/* Skills and activities */}
      <Heading
        question={"Let's have a look at"}
        title={"Activities And Skills"}
      ></Heading>
      <div className="w-4/5 mx-auto">
        <div className="grid md:grid-cols-2  gap-5 mb-5">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              expedita aliquam labore dignissimos voluptatibus voluptatem modi
              perferendis sequi eius assumenda?
            </p>
            <img src={skill} alt="" className="w-4/5 mt-5" />
          </div>

          <div className="">
            <div>
              {accordions.map((accordion) => (
                <Accordion
                  key={accordion.key}
                  title={accordion.title}
                  data={accordion.data}
                  isOpen={accordion.isOpen}
                  toggleAccordion={() => toggleAccordion(accordion.key)}
                />
              ))}
            </div>
          </div>
        </div>

        <Slider className="" {...SliderSettings}>
          {technologyIcons.map((icon) => (
            <div
              className="!flex justify-center items-center bg-slate-100 p-3 !ml-3"
              key={indexedDB}
            >
              <img className="w-20" src={icon} alt="" />
            </div>
          ))}
        </Slider>
      </div>

      {/* team */}
      {/* 
      <div className="my-20">
        <Heading
          question={"we manage your business"}
          title={"creative team"}
        ></Heading>
        <div>
          <div>
            <img src="" alt="" />
            <div>
              <h4>Mohammad Mahmudul Hasan</h4>
              <p>founder & ceo</p>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
