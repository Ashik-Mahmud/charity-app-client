import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
type pageProps = {
  title: string;
  isSearch?: boolean;
};
const PageBanner = ({ title, isSearch }: pageProps) => {
  return (
    <PageBannerContainer>
      <h2 className="text-5xl text-white font-bold">{title}</h2>
      {isSearch && (
        <div className="mt-10">
          <small className="text-white text-center block">
            Search by Name, Location
          </small>
          <div className="flex items-stretch bg-slate-50 p-2  rounded-full ">
            <input
              type="search"
              placeholder="Search Events"
              className="p-2 bg-transparent outline-none w-full px-5"
            />
            <button className="px-5">
              <BsSearch />
            </button>
          </div>
        </div>
      )}
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
