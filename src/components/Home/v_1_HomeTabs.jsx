import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import allGames from '../../assets/img/homeTab/allGames.png';
import '../../assets/css/home.css';
import useFetch from '../../hooks/useFetch';
import BASE_URL from '../../hooks/baseURL';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function HomeTabs() {
  const { data: gameTypes } = useFetch(BASE_URL + '/gameType');
  const [url, setUrl] = useState(BASE_URL + '/allGameProducts');
  const { data: games, loading } = useFetch(url);
  const products = games.products;
  const slots = games[0]?.products;
  const casinos = games[1]?.products;
  const sports = games[2]?.products;
  const fishes = games[3]?.products;
  console.log(games);

  // console.log(allplays[0]?.name);

  let auth = localStorage.getItem('authToken');
  let authUser = JSON.parse(localStorage.getItem('authUser'));
  const navigate = useNavigate();

  const launchGame = (gameTypeId, product_code) => {
    if (auth) {
      let user = authUser.userData;
      const gameData = {
        productId: product_code,
        gameType: gameTypeId,
      };
      //fetch api calling
      fetch(BASE_URL + '/game/Seamless/LaunchGame/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('authToken'),
        },
        body: JSON.stringify(gameData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Launch Game failed');
          }
          console.log('Launch Game success');
          return response.json();
        })
        .then((data) => {
          window.open(data.Url, '_blank');
        })
        .catch((error) => {
          console.error('Launch Game error:', error);
        });
    } else {
      navigate('/login');
    }
  };

  return (
    <Tab.Container id='left-tabs-example' defaultActiveKey={0}>
      <div className='mt-3'>
        <div className='d-flex ' style={{ width: '100%' }}>
          <div className=''>
            <div>
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
                    gameTypes.map((tab) => {
                      return (
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
                      );
                    })}
                </Nav.Item>
              </Nav>
            </div>
          </div>
          <div className=' '>
            {loading && (
              <div className='text-center'>
                <div className='spinner-border text-white' role='status'>
                  <span className='visually-hidden'>Loading...</span>
                </div>
              </div>
            )}
            <div>
              <Tab.Pane className='ms-1 row' eventKey={0}>
                <h3 className='text-white'>{games[0]?.name}</h3>
                {slots &&
                  slots.map((product) => {
                    return (
                      <Link
                        key={product.id}
                        className='col-5  col-md-4 col-lg-3 col-xl-2  mb-1 mb-sm-4 btn'
                        onClick={() => launchGame(games[0]?.code, product.code)}
                      >
                        <img
                          className={`img-fluid rounded-3 shadow gameImg `}
                          src={product.imgUrl}
                        />
                      </Link>
                    );
                  })}

                <h3 className='text-white mt-5'>{games[1]?.name}</h3>
                {casinos &&
                  casinos.map((product) => {
                    return (
                      <Link
                        key={product.id}
                        className='col-5  col-md-4 col-lg-3 col-xl-2  mb-1 mb-sm-4 btn'
                        onClick={() => launchGame(games[1]?.code, product.code)}
                      >
                        <img
                          className={`img-fluid rounded-3 shadow gameImg `}
                          src={product.imgUrl}
                        />
                      </Link>
                    );
                  })}

                <h3 className='text-white mt-5'>{games[2]?.name}</h3>
                {sports &&
                  sports.map((product) => {
                    return (
                      <Link
                        key={product.id}
                        className='col-5  col-md-4 col-lg-3 col-xl-2  mb-1 mb-sm-4 btn'
                        onClick={() => launchGame(games[2]?.code, product.code)}
                      >
                        <img
                          className={`img-fluid rounded-3 shadow gameImg `}
                          src={product.imgUrl}
                        />
                      </Link>
                    );
                  })}

                <h3 className='text-white mt-5'>{games[3]?.name}</h3>
                {fishes &&
                  fishes.map((product) => {
                    return (
                      <Link
                        key={product.id}
                        className='col-5  col-md-4 col-lg-3 col-xl-2  mb-1 mb-sm-4 btn'
                        onClick={() => launchGame(games[3]?.code, product.code)}
                      >
                        <img
                          className={`img-fluid rounded-3 shadow gameImg `}
                          src={product.imgUrl}
                        />
                      </Link>
                    );
                  })}
              </Tab.Pane>
            </div>
            <div>
              <Tab.Pane className=' ms-1 row' eventKey={games?.id}>
                <h3 className='text-white'>{games?.name}</h3>
                {products &&
                  products.map((product) => {
                    return (
                      <Link
                        key={product.id}
                        className='col-5  col-md-4 col-lg-3 col-xl-2  mb-1 mb-sm-4 btn'
                        onClick={() => launchGame(games.code, product.code)}
                      >
                        <img
                          className={`img-fluid rounded-3 shadow gameImg `}
                          src={product.imgUrl}
                        />
                      </Link>
                    );
                  })}
              </Tab.Pane>
            </div>
          </div>
        </div>
      </div>
    </Tab.Container>
  );
}

export default HomeTabs;
