import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "@emotion/styled";

//Per-Page Layouts
// import Layout from '../components/layout'
// import NestedLayout from '../components/nested-layout'

export const HomeStyle = styled.div`
  /* div { */
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, "Arial Narrow Bold", sans-serif;
  background-color: #0c134f;
  /* } */
`;

import Home from "./Home";

export default function Page() {
  return (
    <HomeStyle>
      <Home />
    </HomeStyle>
  );
}

// Page.getLayout = function getLayout(page) {
//   return (
//     <Layout>
//       <NestedLayout>{page}</NestedLayout>
//     </Layout>
//   );
// };
