import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Header from "../components/Header";
import styled from "styled-components";
import Head from "next/head";

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #e4e4e4;
  width: 100%;
`;

const Card = styled.div`
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: 0.3s;
  width: 25%;

  margin: 20px;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);
  }
`;

const Banner = styled.img`
  width: 100%;
  max-height: 450px;
`;

const Container = styled.div`
  padding: 2px 16px;
`;

const Name = styled.h4`
  font-size: 1.4rem;
  text-align: center;
  color: #242424;
  margin: 5px;
`;

const Rating = styled.h4`
  font-size: 1.1rem;
  text-align: center;
  margin: 5px;
  color: #282e3c;
`;

const PremiereDate = styled.h4`
  font-size: 1.1rem;
  text-align: center;
  margin: 8px;
  color: #282e3c;
`;

const Index = props => (
  <>
    <Head>
      <title>Batman Shows App - Homepage</title>
    </Head>
    <Header />
    <MainContainer>
      {props.movies.map(movie => (
        <Link href="/moviedetail/[id]" as={`/moviedetail/${movie.id}`}>
          <Card>
            <Banner src={movie.image.medium} />
            <Container>
              <Name>{movie.name}</Name>
              <Rating>
                {movie.rating.average
                  ? `Rating: ${movie.rating.average}`
                  : "Waiting for reviews"}
              </Rating>
              <PremiereDate>{movie.premiered}</PremiereDate>
            </Container>
          </Card>
        </Link>
      ))}
    </MainContainer>
  </>
);

Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  return {
    movies: data.map(movie => movie.show)
  };
};

export default Index;
