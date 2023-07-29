import { Footer as ArwesFooter, Paragraph } from "arwes";
import Centered from "./Centered";

const Footer = () => {
  return <ArwesFooter animate>
    <Centered>
      <Paragraph style={{ fontSize: 14, margin: "10px 0" }}>
        The backend is developed by Priyanshu Naudiyal (2023). All Rights Reserved.
      </Paragraph>
    </Centered>
  </ArwesFooter>
};

export default Footer;
