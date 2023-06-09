import InfoCard from "./body/InfoCard";
import SignUp from "./body/SignUp";
import Start from "./body/Start";

export default function Body() {
  const info = [
    {
      image: "",
      title: "Brand Recognition",
      info: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    },
    {
      image: "",
      title: "Detailed Records",
      info: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      image: "",
      title: "Fully Customizable",
      info: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];

  return (
    <>
      <div>
        <SignUp />

        <div>
          <h1>Advanced Statistics</h1>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        {info.map((info) => {
          <InfoCard />;
        })}
      </div>
      <Start />
    </>
  );
}
