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
        img="http://www.become-conquer.purpleparrotwebsites.com/wp-content/uploads/2023/07/X1264A-0081AV-2048px.jpg"
        title="start here to change your life!"
        subheader="Adriana D. Marvel | Become & conquer | Mindset & Trauma Coach"
        description="Have questions about the Break Up With Your Old Self? Looking for a professional speaker?"
      />
      <FormContact title="Contact & Booking Form" />
    </LayoutJs>
  );
}
