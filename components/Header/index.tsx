import Menu from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
import { Grid, IconButton } from "@mui/material";
import { Navigation, StyledList } from "./style";
import { HEADERLIST } from "@/constances/header";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((open) => !open);
  };
  // const handleAlignment = (event, newAlignment) => {
  //   setOnMenu(newAlignment);
  // };
  return (
    <header className="headerStyle">
      <Grid container className="">
        <Grid item xs={2} md={2}>
          <h1>
            <Link href="/">메가시티</Link>
          </h1>
        </Grid>
        <Grid item xs={1} md={1}>
          <IconButton
            className="svg_icons"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleOpen}
          >
            {open ? <Close /> : <Menu />}
          </IconButton>
        </Grid>
        <Grid item xs={8} md={8}>
          <Navigation open={open}>
            {HEADERLIST.map(({ title, subtitle }, index) => (
              <StyledList key={index}>
                <div>{title}</div>
                <ul>
                  {subtitle.map(({ label, link }, index) => {
                    return (
                      <li key={index}>
                        <Link href={link}>{label}</Link>
                      </li>
                    );
                  })}
                </ul>
              </StyledList>
            ))}
          </Navigation>
        </Grid>
        <Grid item xs={1} md={1}>
          <div>
            <div style={{ color: "whitesmoke" }}>Conenect To</div>
            <div style={{ color: "whitesmoke" }}>1644-3777</div>
          </div>
        </Grid>
      </Grid>
    </header>
  );
}
