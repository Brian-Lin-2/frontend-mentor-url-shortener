/* eslint-disable react/prop-types */
export default function InfoCard({ image, title, info, margin }) {
  let style =
    "flex flex-col items-center text-center bg-white p-6 rounded relative z-10 lg:text-start lg:items-start lg:pb-8 " +
    margin;

  return (
    <div className={style}>
      <img
        className="p-6 bg-dark-violet rounded-full overflow-visible relative bottom-16 lg:p-5 lg:left-1"
        src={image}
        alt=""
      />
      <h1 className="text-xl font-bold mb-6 -mt-8 lg:mx-2 lg:mb-3 lg:-mt-10">
        {title}
      </h1>
      <p className="text-sm text-grayish-violet mx-4 lg:mx-2 lg:leading-relaxed">
        {info}
      </p>
    </div>
  );
}
