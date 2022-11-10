// LEMBRAR DE MUDAR OS CONTEÚDOS EM CONFIG.JSON PARA O CONTEÚDO COMUNISTUBE! 

import React from "react"
import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline"


function HomePage() {
 
  const [valorDoFiltro, setValorDoFiltro ] = React.useState("");
  

  return (
      <>
      <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
        <Header />
        <TimeLine searchValue={valorDoFiltro} playlists={config.playlists}>
            Conteúdo
        </TimeLine>
      </div>
     
    </>
    );
}

export default HomePage;

// function Menu() {
//   return <div>Menu</div>;
// }

const StyledHeader = styled.div`
  background-color: ${({theme}) => theme.backgroundLevel1};

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
  .banner {
    margin-bottom: -50px;
    width: 100vw;
    height: 250px;
    border-radius: 0px;
  }
`;
function Header() {
  return (
    <StyledHeader>
      <img className ="banner" src ={'https://img.imageboss.me/revista-cdn/cdn/30736/3ab8eb15e555ccb4b8ff29e0b49deeb5f8db8c7b.jpg?1597184837'} />

      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function TimeLine({searchValue, ...props}) {
 
  const playlistsNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>        
      {playlistsNames.map((playlistsName) => {
        const videos = props.playlists[playlistsName];
        // console.log(playlistsName);
        // console.log(videos);
        return (
          <section key={playlistsName}>
            <h2>{playlistsName}</h2>
            <div>
              {videos.filter((video) => {
                const titleNormalized = video.title.toLowerCase();
                const searchValueNormalized = searchValue.toLowerCase();
                return titleNormalized.includes(searchValueNormalized)
              })
              .map((video) => {
                return (
                  <a key={video.url} href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
    })}
    </StyledTimeline>
  );
}
