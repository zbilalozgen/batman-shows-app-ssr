import fetch from "isomorphic-unfetch";
import Header from "../../components/Header";
import ReactHtmlParser from "react-html-parser";
import styled from "styled-components";
import Head from "next/head";

const MainContainer = styled.div`
text-align:center
  background: #e4e4e4;
  width: 80%;
  height: 535px;
  margin: 0 auto;
  
  
`;

const Name = styled.h1`
  font-size: 3em;
  padding-top: 20px;
  text-align: center;
  color: #242424;
  margin: 5px;
`;

const Summary = styled.div`
  color: #282e3c;
  font-size: 1.3rem;
  margin: 10px;
`;

const Banner = styled.img`
  float: left;
  height: 530px;
`;

const MovieDetail = props => (
  <>
    <Head>
      <title>{`Batman Shows App - ${props.movie.name}`}</title>
    </Head>
    <Header />
    <MainContainer>
      <Banner src={props.movie.image.original} />
      <Name>{props.movie.name}</Name>
      <Summary>{ReactHtmlParser(props.movie.summary)}</Summary>
    </MainContainer>
  </>
);

MovieDetail.getInitialProps = async function(data) {
  const { id } = data.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const movie = await res.json();

  return { movie };
};

export default MovieDetail;
