import React from "react";
import Banner from "../components/banners/banner";
import FormContact from "../components/Forms/FormContact";
import LayoutJs from "../components/layoutJs";
import Seo from "../components/seo";

export default function Contact() {
  return (
    <LayoutJs>
      <Seo
        title="Contact & Booking - Become & Conquer"
        description="You can contact us on this page using the form."
      />
      <Banner
        img="http://www.become-conquer.purpleparrotwebsites.com/wp-content/uploads/2023/07/X1264A-0081AV.jpg"
        title="start here to change your life!"
        subheader="adriana van der merwe | Become & conquer | Mindset & Trauma Coach"
        description="Have questions about The New Way of Living Program? Looking for a professional speaker?"
      />
      <FormContact title="Contact & Booking Form" />
    </LayoutJs>
  );
}
