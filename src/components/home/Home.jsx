import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default function Home({ login, setLogin }) {
  return (
    <div className="font-poppins">
      <Header login={login} setLogin={setLogin} />
      <Body login={login} />
      <Footer />
    </div>
  );
}
