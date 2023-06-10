/* eslint-disable react/prop-types */
export default function InfoCard({ image, title, info }) {
  return (
    <div className="flex flex-col items-center text-center bg-white p-6 relative z-10">
      <img
        className="p-6 bg-dark-violet rounded-full overflow-visible relative bottom-16"
        src={image}
        alt=""
      />
      <h1 className="text-xl font-bold mb-6 -mt-8">{title}</h1>
      <p className="text-sm text-grayish-violet mx-4">{info}</p>
    </div>
  );
}
