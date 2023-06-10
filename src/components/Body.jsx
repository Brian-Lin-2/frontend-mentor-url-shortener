import InfoCard from "./body/InfoCard";
import Shorten from "./body/Shorten";
import Boost from "./body/Boost";

export default function Body() {
  const info = [
    {
      image: "./images/icon-brand-recognition.svg",
      title: "Brand Recognition",
      info: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    },
    {
      image: "./images/icon-detailed-records.svg",
      title: "Detailed Records",
      info: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      image: "./images/icon-fully-customizable.svg",
      title: "Fully Customizable",
      info: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];

  return (
    <>
      <div className="bg-gray pb-24">
        <Shorten />

        <div className="mx-6 text-center mb-32">
          <h1 className="font-bold text-2xl mb-4">Advanced Statistics</h1>
          <p className="text-grayish-violet leading-relaxed">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 grid-rows-3 gap-24 mx-6">
          {info.map((info) => {
            return (
              <InfoCard
                key={crypto.randomUUID()}
                image={info.image}
                title={info.title}
                info={info.info}
              />
            );
          })}
        </div>
      </div>

      <Boost />
    </>
  );
}
