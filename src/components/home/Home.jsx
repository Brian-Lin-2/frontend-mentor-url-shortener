import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default function Home({ login }) {
  return (
    <div className="font-poppins">
      <Header login={login} />
      <Body />
      <Footer />
    </div>
  );
}
