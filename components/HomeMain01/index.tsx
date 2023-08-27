import { SectionStyle } from './style';

export function HomeMain01() {
  return (
    <SectionStyle>
      <video width='100%' autoPlay muted loop>
        <source
          src={process.env.BACKEND_URL + '/HomeAdvertising.mp4'}
          type='video/mp4'
        />
      </video>
    </SectionStyle>
  );
}
