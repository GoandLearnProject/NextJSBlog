import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Tags from "@/components/Tags";
import Footer from "@/components/Footer";
import WaveandBtop from "@/components/WaveandBtop";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  favicon: "favicon.ico",
};

export const runtime=edge

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="oneGrd MN-3 mobS HD-2 flT hdMn bD onIndx onMlt drK">
        <input className="prfI hidden" id="offPrf" type="checkbox" />
        <input className="navI hidden" id="offNav" type="checkbox" />
        <input className="navM hidden" id="onMode" type="checkbox" />
        <div className="mainWrp">
          <Header />
          <div className="mainIn">
            <Menu />
            <div className="blogCont">
              <div className="secIn">
                <Tags />
                <div className="blogM">
                  <main className="blogItm mainbar">
                    <div className="section">
                      <div className="widget Blog">{children}</div>
                    </div>
                  </main>
                </div>
                <Footer />
              </div>
            </div>
          </div>
          <WaveandBtop />
        </div>
        <Script src="/js/main.js" />
      </body>
    </html>
  );
}
