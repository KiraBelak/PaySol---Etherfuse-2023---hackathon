import Head from "next/head";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const Layout = ({ children, ...rest }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col w-full" {...rest}>
        <Header />
        <div className="my-0 bg-pattern">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
