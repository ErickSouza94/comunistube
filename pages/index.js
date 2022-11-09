// LEMBRAR DE MUDAR OS CONTEÚDOS EM CONFIG.JSON PARA O CONTEÚDO COMUNISTUBE! 

import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline"


function HomePage() {
 
  

  return (
      <>
      <CSSReset />
      <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
        <Menu />
        <Header />
        <TimeLine playlists={config.playlists}>
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
    margin-top: 50px;
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

function TimeLine(props) {
 
  const playlistsNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>        
      {playlistsNames.map((playlistsName) => {
        const videos = props.playlists[playlistsName];
        console.log(playlistsName);
        console.log(videos);
        return (
          <section>
            <h2>{playlistsName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
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
