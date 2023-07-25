import React, { useEffect } from "react";
import Banner from "../components/banners/banner";
import FormContact from "../components/Forms/FormContact";
import LayoutJs from "../components/layoutJs";
import Seo from "../components/seo";
import { Helmet } from "react-helmet";
import Head from "next/head";
import { InlineWidget } from "react-calendly";

export default function Booking() {
  return (
    <LayoutJs>
      <Seo
        title="Free Consultation - Become & Conquer"
        description="You can book us on this page using the form."
      />
      <Banner
        img="http://www.become-conquer.purpleparrotwebsites.com/wp-content/uploads/2023/07/X1264A-0081AV-2048px.jpg"
        title="book 30 minutes with me!"
        subheader="Adriana D. Marvel | Become & conquer | Mindset & Trauma Coach"
        description="Have questions about the Break Up With Your Old Self prorgam?"
      />
      <InlineWidget url="https://calendly.com/adriana8coaching" />
    </LayoutJs>
  );
}
