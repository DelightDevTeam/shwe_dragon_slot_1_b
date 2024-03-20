import React, { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import allGames from '../../assets/img/homeTab/allGames.png';
import '../../assets/css/home.css';
import useFetch from '../../hooks/useFetch';
import BASE_URL from '../../hooks/baseURL';
import { Link, useNavigate } from 'react-router-dom';

function GameList({ game, products, launchGame }) {
  return (
    <>
      <h3 className='text-white text-start'>{game?.name}</h3>
      {products &&
        products.map((product) => (
          <Link
            key={product.id}
            className='col-4 col-md-4 col-lg-3 col-xl-2 mb-1 mb-sm-4 px-1 py-0 mx-0'
            onClick={() => launchGame(game?.code, product.code)}
          >
            <img
              className={`img-fluid rounded-3 shadow gameImg w-100 h-auto`}
              src={product.imgUrl}
            />
          </Link>
        ))}
    </>
  );
}

function HomeTabs() {
  const { data: gameTypes } = useFetch(BASE_URL + '/gameType');
  const [url, setUrl] = useState(BASE_URL + '/allGameProducts');
  const { data: games, loading } = useFetch(url);
  const products = games.products;
  const slots = games[0]?.products;
  const casinos = games[1]?.products;
  const sports = games[2]?.products;
  const fishes = games[3]?.products;
  const navigate = useNavigate();

  const [auth, setAuth] = useState(null);
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    setAuth(localStorage.getItem('authToken'));
    setAuthUser(JSON.parse(localStorage.getItem('authUser')));
  }, []);

  const launchGame = async (gameTypeId, product_code) => {
    if (auth) {
      let user = authUser.userData;
      const gameData = {
        productId: product_code,
        gameType: gameTypeId,
      };
      try {
        const response = await fetch(BASE_URL + '/game/Seamless/LaunchGame/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + auth,
          },
          body: JSON.stringify(gameData),
        });
        if (!response.ok) {
          throw new Error('Launch Game failed');
        }
        const data = await response.json();
        window.open(data.Url, '_blank');
      } catch (error) {
        console.error('Launch Game error:', error);
      }
    } else {
      navigate('/login');
    }
  };

  return (
    <Tab.Container id='left-tabs-example' defaultActiveKey={0}>
      <div className='mt-3'>
        <div className='d-flex justify-content-between' style={{ width: '100%' }}>
          <div className=''>
            <div className='sidebar'>
              <Nav variant='pills' className='flex-column'>
                <Nav.Item>
                  <Nav.Link
                    className='border rounded-3 mb-1 py-0 py-sm-1 mb-sm-2 px-0 d-flex flex-column align-items-center '
                    eventKey={0}
                    onClick={() => setUrl(BASE_URL + '/allGameProducts')}
                  >
                    <img style={{ height: '35px' }} src={allGames} />
                    <span className='tabTitle text-center text-light'>
                      All Games
                    </span>
                  </Nav.Link>
                  {gameTypes &&
                    gameTypes.map((tab) => (
                      <Nav.Link
                        key={tab.id}
                        onClick={() =>
                          setUrl(BASE_URL + '/gameTypeProducts/' + tab.id)
                        }
                        className='border rounded-3 mb-2 py-0 py-sm-1 mb-sm-2 px-0 d-flex flex-column align-items-center '
                        eventKey={tab.id}
                      >
                        <img className='tabImg' src={tab.img_url} />
                        <span className='tabTitle text-center text-light'>
                          {tab.name}
                        </span>
                      </Nav.Link>
                    ))}
                </Nav.Item>
              </Nav>
            </div>
          </div>
          <div className=''>
            {loading && (
              <div className='text-center'>
                <div className='spinner-border text-white' role='status'>
                  <span className='visually-hidden'>Loading...</span>
                </div>
              </div>
            )}
            <div>
              <Tab.Pane className='ms-1 row text-center' eventKey={0}>
                <GameList
                  game={games[0]}
                  products={slots}
                  launchGame={launchGame}
                />
                <GameList
                  game={games[1]}
                  products={casinos}
                  launchGame={launchGame}
                />
                <GameList
                  game={games[2]}
                  products={sports}
                  launchGame={launchGame}
                />
                <GameList
                  game={games[3]}
                  products={fishes}
                  launchGame={launchGame}
                />
              </Tab.Pane>
            </div>
            <div>
              <Tab.Pane className=' ms-1 row' eventKey={games?.id}>
                <GameList
                  game={games}
                  products={products}
                  launchGame={launchGame}
                />
              </Tab.Pane>
            </div>
          </div>
        </div>
      </div>
    </Tab.Container>
  );
}

export default HomeTabs;
