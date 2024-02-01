import React from "react";

import Navbar from "../Navbar/Navbar";
import Team_Img_Small from "../Team_Img_Small/Team_Img_Small";
import Team_Single_Contact_Information from "../Team_Single_Contact_Information/Team_Single_Contact_Information";
import Team_Bio from "../Team_Bio/Team_Bio";
import Img_Design from "../Img_Design/Img_Design";
import Footer from "../Footer/Footer";
function team_single() {
  return (
    <div>
      <Navbar />
      <Team_Img_Small />
      <Team_Single_Contact_Information />
      <Team_Bio />
      <Img_Design />
      <Footer />
    </div>
  );
}

export default team_single;
