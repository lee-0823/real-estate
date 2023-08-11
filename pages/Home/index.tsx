import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
//MUI
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

//Bugger Icon
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import Card from "@mui/material/Card";
import Link from "next/link";

import { Close } from "@mui/icons-material";

import { HomeStyle } from "./style";

import { Header } from "@/components/Header";
import { HomeMain01 } from "@/components/HomeMain01";
import { HomeMain02 } from "@/components/HomeMain02";

// function Main02() {
//   return <div></div>;
// }

// function Main03() {
//   return <div></div>;
// }

// function Main04() {
//   return <div></div>;
// }

// function Main05() {
//   return <div></div>;
// }

// function Main06() {
//   return <div></div>;
// }

// function Footer() {
//   return <div></div>;
// }

// function Home() {
//   const bgColor = {
//     backgroundColor: "black",
//   };
// }

export function Home() {
  return (
    <HomeStyle>
      <Header />
      <HomeMain01 />
      <HomeMain02 />
    </HomeStyle>
  );
}

export default Home;
