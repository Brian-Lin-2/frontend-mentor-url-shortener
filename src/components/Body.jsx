import InfoCard from "./body/InfoCard";
import Shorten from "./body/Shorten";
import Boost from "./body/Boost";

export default function Body() {
  const info = [
    {
      image: "./images/icon-brand-recognition.svg",
      title: "Brand Recognition",
      info: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
      margin: "lg:mt-0",
    },
    {
      image: "./images/icon-detailed-records.svg",
      title: "Detailed Records",
      info: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      margin: "lg:mt-12",
    },
    {
      image: "./images/icon-fully-customizable.svg",
      title: "Fully Customizable",
      info: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      margin: "lg:mt-20",
    },
  ];

  return (
    <>
      <div className="bg-light-gray pb-24">
        <Shorten />

        <div className="mx-6 text-center mb-32 lg:mt-12 lg:mb-20">
          <h1 className="font-bold text-2xl mb-4 lg:text-4xl">
            Advanced Statistics
          </h1>
          <p className="text-grayish-violet leading-relaxed lg:mx-128">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        {/* Horizontal Deco Bar */}
        <div className="relative w-2 bg-cyan h-full left-1/2 -mx-1 lg:h-2 lg:w-1/2 lg:left-1/4 lg:top-36"></div>

        <div className="grid grid-cols-1 grid-rows-3 gap-24 mx-6 lg:grid-cols-3 lg:grid-rows-1 lg:items-start lg:mx-48 lg:gap-8 lg:mb-8">
          {/* Vertical Deco Bar */}
          <div className="absolute w-2 bg-cyan h-full left-1/2 -mx-1 lg:hidden"></div>

          {info.map((info) => {
            return (
              <InfoCard
                key={crypto.randomUUID()}
                image={info.image}
                title={info.title}
                info={info.info}
                margin={info.margin}
              />
            );
          })}
        </div>
      </div>

      <Boost />
    </>
  );
}
