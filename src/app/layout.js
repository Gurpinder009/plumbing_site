import "./globals.css";

import { fontFamily } from "@/Components/fontStyle";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Main from "./main";
config.autoAddCss = false;

export const metadata = {
  title: "Dhillon Bro's Mechanical LTD",
  description:
    "Dhillon Bro's Plumbing and Heating is your one-stop shop for all your plumbing and hydronic heating needs. With over 7 years of experience, we're trusted for our reliable, efficient, and affordable services. Our team is highly skilled and can handle everything from minor repairs to major installations and renovations any plumbing, heating and gas work. We understand the importance of promptness and provide immediate response with no overtime charges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={fontFamily.className}>
        <Main>{children}</Main>
      </body>
    </html>
  );
}
