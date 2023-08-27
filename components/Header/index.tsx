import Menu from '@mui/icons-material/Menu';
import Close from '@mui/icons-material/Close';
import { Grid, IconButton } from '@mui/material';
import {
  HeaderStyle,
  BuggerMenu,
  Navigation,
  StyledList,
  TelInfo,
} from './style';
import { HEADERLIST } from '@/constances/header';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((open) => !open);
  };

  return (
    <HeaderStyle open={open}>
      <Grid container>
        <Grid item xs={2} md={3}>
          <Link href='/'>
            <img
              src={process.env.BACKEND_URL + '/img/LogoImg/logo.png'}
              width={100}
              height={50}
            />
          </Link>
        </Grid>
        <Grid item xs={1} md={2}>
          <BuggerMenu>
            <IconButton
              className='svg_icons'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
              onClick={handleOpen}
            >
              {open ? <Close /> : <Menu />}
            </IconButton>
          </BuggerMenu>
        </Grid>
        <Grid item xs={8} md={8}>
          <Navigation>
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
          <TelInfo>
            <div>박과장</div>
            <div>1644-3777</div>
          </TelInfo>
        </Grid>
      </Grid>
    </HeaderStyle>
  );
}
