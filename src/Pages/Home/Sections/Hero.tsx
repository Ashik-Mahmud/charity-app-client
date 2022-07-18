import styled from "styled-components";

const Hero = () => {
  return (
    <HeroContainer id="hero" className=" bg-no-repeat bg-cover">
      <div className="hero pt-[20rem] pb-40 ">
        <div className="hero-content text-center">
          <div className="px-56">
            <h1 className="text-6xl font-bold text-white leading-tight">
              Your Support Get Strong to Helpless Peoples
            </h1>
            <p className="py-6 text-gray-300">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Donate Now</button>
          </div>
        </div>
      </div>
    </HeroContainer>
  );
};
const HeroContainer = styled.section`
  background: linear-gradient(#000000ae, #000000b9),
    url(https://images.unsplash.com/photo-1494832944834-a08818c634b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG92ZXJ0eXxlbnwwfHwwfHw%3D&w=1000&q=80);
  background-size: cover;
  background-repeat: no-repeat;
`;

export default Hero;
