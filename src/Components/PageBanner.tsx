import styled from "styled-components";

type pageProps = {
  title: string;
};
const PageBanner = ({ title }: pageProps) => {
  return (
    <PageBannerContainer>
      <h2 className="text-5xl text-white font-bold">{title}</h2>
    </PageBannerContainer>
  );
};

const PageBannerContainer = styled.div`
  background: linear-gradient(#000000c3, #000000cc),
    url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5GzCtzo2-sHYe7D6LuNb8jCLYKeynItBKjTreaAHCHGJp8I3V-XcFQFV7zpEidFJLiHo&usqp=CAU);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 10rem 0rem;
  background-position: center;
  display: grid;
  place-items: center;
`;

export default PageBanner;
