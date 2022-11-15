import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* use navbar here o show it in every p */}
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
