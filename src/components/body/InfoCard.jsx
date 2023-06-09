/* eslint-disable react/prop-types */
export default function InfoCard({ image, title, info }) {
  return (
    <div>
      <img src={image} alt="" />
      <h1>{title}</h1>
      <p>{info}</p>
    </div>
  );
}
