import Head from "next/head";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import OfflineButton from "@/components/common/OfflineButton";
import { Toaster } from "react-hot-toast";

const Layout = ({ children,showBanner =false, ...rest }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col w-full" {...rest}>
        <Header />
        <div className="my-0 w-min-screen bg-pattern">
        <Toaster position="bottom-center" />
          {showBanner && <OfflineButton />}
          {children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
