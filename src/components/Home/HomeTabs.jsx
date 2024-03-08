import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import sport from "../../assets/img/homeTab/sport.png";
import allGames from "../../assets/img/homeTab/allGames.png";
import hot from "../../assets/img/homeTab/hot.png";
import h1 from "../../assets/img/homeTab/h1.png";
import h2 from "../../assets/img/homeTab/h2.png";
import h3 from "../../assets/img/homeTab/h3.png";
import h4 from "../../assets/img/homeTab/h4.png";
import h5 from "../../assets/img/homeTab/h5.png";
import h6 from "../../assets/img/homeTab/h6.png";
import h7 from "../../assets/img/homeTab/h7.png";
import h8 from "../../assets/img/homeTab/h8.png";
import h9 from "../../assets/img/homeTab/h9.png";
import h10 from "../../assets/img/homeTab/h10.png";

import esport from "../../assets/img/homeTab/esport.png";
import casino from "../../assets/img/homeTab/casino.png";
import slots from "../../assets/img/homeTab/slots.png";
import fish from "../../assets/img/homeTab/fish.png";
import cock from "../../assets/img/homeTab/cock.png";
import horse from "../../assets/img/homeTab/horse.png";
import sport1 from "../../assets/img/homeTab/sport1.png";
import sport2 from "../../assets/img/homeTab/sport2.png";
import sport3 from "../../assets/img/homeTab/sport3.png";
import sport4 from "../../assets/img/homeTab/sport4.png";
import sport5 from "../../assets/img/homeTab/sport5.png";
import sport6 from "../../assets/img/homeTab/sport6.png";
import sport7 from "../../assets/img/homeTab/sport7.png";
import sport8 from "../../assets/img/homeTab/sport8.png";
import sport9 from "../../assets/img/homeTab/sport9.png";
import esport1 from "../../assets/img/homeTab/esport1.png";
import casino1 from "../../assets/img/homeTab/casino1.png";
import casino2 from "../../assets/img/homeTab/casino2.png";
import casino3 from "../../assets/img/homeTab/casino3.png";
import casino4 from "../../assets/img/homeTab/casino4.png";
import casino5 from "../../assets/img/homeTab/casino5.png";
import casino6 from "../../assets/img/homeTab/casino6.png";
import casino7 from "../../assets/img/homeTab/casino7.png";
import casino8 from "../../assets/img/homeTab/casino8.png";
import casino9 from "../../assets/img/homeTab/casino9.png";
import casino10 from "../../assets/img/homeTab/casino10.png";
import slot1 from "../../assets/img/homeTab/slot1.png";
import slot2 from "../../assets/img/homeTab/slot2.png";
import slot3 from "../../assets/img/homeTab/slot3.png";
import slot4 from "../../assets/img/homeTab/slot4.png";
import slot5 from "../../assets/img/homeTab/slot5.png";
import slot6 from "../../assets/img/homeTab/slot6.png";
import slot7 from "../../assets/img/homeTab/slot7.png";
import slot8 from "../../assets/img/homeTab/slot8.png";
import slot9 from "../../assets/img/homeTab/slot9.png";
import slot10 from "../../assets/img/homeTab/slot10.png";
import fish1 from "../../assets/img/homeTab/fish1.png";
import fish2 from "../../assets/img/homeTab/fish2.png";
import fish3 from "../../assets/img/homeTab/fish3.png";
import fish4 from "../../assets/img/homeTab/fish4.png";
import fish5 from "../../assets/img/homeTab/fish5.png";
import fish6 from "../../assets/img/homeTab/fish6.png";
import cock1 from "../../assets/img/homeTab/cock1.png";
import horse1 from "../../assets/img/homeTab/horse1.png";

import lottery from "../../assets/img/homeTab/lottery.png";
import promo from "../../assets/img/homeTab/promo.png";
import jackpot from "../../assets/img/homeTab/jackpot-bg.png";
import vsport from "../../assets/img/homeTab/virtual-sport.png";

import sports1 from "../../assets/img/homeTab/asia_gaming.png";
import sports2 from "../../assets/img/homeTab/sport3 (1).png";
import "../../assets/css/home.css";
import useFetch from "../../hooks/useFetch";
import BASE_URL from "../../hooks/baseURL";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function HomeTabs() {
  // const [url, setUrl] = useState("");

  const {data: slotGames} = useFetch(BASE_URL + "/gameTypeProducts/1");
  const { data: casinoGames } = useFetch(BASE_URL + "/gameTypeProducts/2");
  const { data: sportGames } = useFetch(BASE_URL + "/gameTypeProducts/3");
  const { data: virtualGames } = useFetch(BASE_URL + "/gameTypeProducts/4");
  const { data: lotteryGames } = useFetch(BASE_URL + "/gameTypeProducts/5");
  const { data: qipaiGames } = useFetch(BASE_URL + "/gameTypeProducts/6");
  const { data: p2pGames } = useFetch(BASE_URL + "/gameTypeProducts/7");
  const { data: fishingGames } = useFetch(BASE_URL + "/gameTypeProducts/8");
  const { data: otherGames } = useFetch(BASE_URL + "/gameTypeProducts/9");
  const { data: fightingGames } = useFetch(BASE_URL + "/gameTypeProducts/10");
  const { data: bonusGames } = useFetch(BASE_URL + "/gameTypeProducts/11");
  const { data: jackpotGames } = useFetch(BASE_URL + "/gameTypeProducts/12");
  const { data: esportGames } = useFetch(BASE_URL + "/gameTypeProducts/13");
  // const { data: hotGames } = useFetch(BASE_URL + "/hotgame");
  const { data: gameTypes } = useFetch(BASE_URL + "/gameType");
  // console.log(slotGames?.products?.length);

  const imgs = [
    { id: 1, img: allGames, title: "ALL GAMES" },
    { id: 2, img: hot, title: "HOT GAMES" },
    { id: 3, img: slots, title: "Slot" },
    { id: 4, img: casino, title: "Live Casino" },
    { id: 5, img: sport, title: "Sport Book" },
    { id: 6, img: vsport, title: "Virtual Sport" },
    { id: 7, img: lottery, title: "Lottery" },
    { id: 8, img: sport, title: "Qipai" },
    { id: 9, img: esport, title: "P2P" },
    { id: 10, img: fish, title: "Fishing" },
    { id: 11, img: casino, title: "Others" },
    { id: 12, img: cock, title: "Cock Fighting" },
    { id: 13, img: promo, title: "Bonus" },
    { id: 14, img: jackpot, title: "Jackpot" },
    { id: 15, img: esport, title: "ESport" },
  ];

  const contentTabs = [
    { id: 1, imgs: [] },
    { id: 2, imgs: [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10] },
    { id: 4, imgs: [sports2, sports1, sport3, sport4] },
    // {id:2,imgs:[esport1,esport1,esport1]},
    { id: 5, imgs: [casino1, casino2, casino3, casino4] },
    { id: 3, imgs: [slot1, slot2, slot3, slot4, slot5, slot6, slot7, slot8] },
    // {id:6,imgs:[cock1,cock1,cock1]},
    // {id:7,imgs:[horse1,horse1,horse1]}
  ];

  const launchGame = (gameId) => {
    //fetch api calling
    fetch(BASE_URL + "/launchGame/" + gameId, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("authToken"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Launch Game failed");
        }
        console.log("Launch Game success");
        return response.json();
      })
      .then((data) => {
        // console.log(data.data);
        window.location.href = data.data;
      })
      .catch((error) => {
        console.error("Launch Game error:", error);
      });
  };
  
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey={0}>
      <div className="mt-5 d-flex  flex-nowrap ">
        <div>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link
                className="border rounded-3 mb-1 py-0 py-sm-1 mb-sm-2 px-0 d-flex flex-column align-items-center "
                eventKey={0}
              >
                <img style={{ height: "35px" }} src={allGames} />
                <span className="tabTitle text-center text-light">
                  All Games
                </span>
              </Nav.Link>
              {gameTypes &&
                gameTypes.map((tab) => {
                  return (
                    <Nav.Link
                      key={tab.id}
                      className="border rounded-3 mb-1 py-0 py-sm-1 mb-sm-2 px-0 d-flex flex-column align-items-center "
                      eventKey={tab.id}
                    >
                      <img style={{ height: "35px" }} src={tab.img_url} />
                      <span className="tabTitle text-center text-light">
                        {tab.name}
                      </span>
                    </Nav.Link>
                  );
                })}
            </Nav.Item>
          </Nav>
        </div>
        <div>
          <Tab.Content className="ms-sm-5">
            <div className="container" style={{ width: "100%" }}>
              <Tab.Pane className="row " eventKey={1}>
                {slotGames && slotGames.products?.map((slotGame) => {
                  return (
                    <Link
                      key={slotGame.id}
                      to={"/games"}
                      className="col-6 col-lg-4 col-xl-3 mb-4"
                      onClick={() => {
                        localStorage.removeItem("product_id");
                        localStorage.removeItem("gameType_id");
                        localStorage.removeItem("title");
                        localStorage.setItem("product_id", slotGame.id);
                        localStorage.setItem(
                          "gameType_id",
                          slotGame.pivot.game_type_id
                        );
                        localStorage.setItem("title", slotGame.name);
                      }}
                    >
                      <img
                        className={`img-fluid rounded-sm-5 gameImg `}
                        src={slotGame.imgUrl}
                      />
                    </Link>
                  );
                })}
              </Tab.Pane>
              <Tab.Pane className="row " eventKey={2}>
                {sportGames.products?.map((sportGame) => {
                  return (
                    <Link
                      key={sportGame.id}
                      to={"/games"}
                      className="col-6 col-lg-4 col-xl-6 mb-4"
                      onClick={() => {
                        localStorage.removeItem("product_id");
                        localStorage.removeItem("gameType_id");
                        localStorage.removeItem("title");
                        localStorage.setItem("product_id", sportGame.id);
                        localStorage.setItem(
                          "gameType_id",
                          sportGame.pivot.game_type_id
                        );
                        localStorage.setItem("title", sportGame.name);
                      }}
                    >
                      <img
                        className={`img-fluid rounded-sm-5 gameImg`}
                        src={sportGame.imgUrl}
                      />
                    </Link>
                  );
                })}
              </Tab.Pane>
              <Tab.Pane className="row " eventKey={3}>
                {casinoGames.products?.map((casinoGame) => {
                  return (
                    <Link
                      key={casinoGame.id}
                      to={"/games"}
                      className="col-6 col-lg-4 col-xl-3"
                      onClick={() => {
                        localStorage.removeItem("product_id");
                        localStorage.removeItem("gameType_id");
                        localStorage.removeItem("title");
                        localStorage.setItem("product_id", casinoGame.id);
                        localStorage.setItem(
                          "gameType_id",
                          casinoGame.pivot.game_type_id
                        );
                        localStorage.setItem("title", casinoGame.name);
                      }}
                    >
                      <img
                        className={`img-fluid mb-4 rounded-sm-5 gameImg`}
                        src={casinoGame.imgUrl}
                      />
                    </Link>
                  );
                })}
              </Tab.Pane>
              <Tab.Pane className="row " eventKey={4}>
                {virtualGames.products?.map((virtualGame) => {
                  return (
                    <Link
                      key={virtualGame.id}
                      to={"/games"}
                      className="col-6 col-lg-4 col-xl-3"
                      onClick={() => {
                        localStorage.removeItem("product_id");
                        localStorage.removeItem("gameType_id");
                        localStorage.removeItem("title");
                        localStorage.setItem("product_id", virtualGame.id);
                        localStorage.setItem(
                          "gameType_id",
                          virtualGame.pivot.game_type_id
                        );
                        localStorage.setItem("title", virtualGame.name);
                      }}
                    >
                      <img
                        className={`img-fluid mb-4 rounded-sm-5 gameImg`}
                        src={virtualGame.imgUrl}
                      />
                    </Link>
                  );
                })}
              </Tab.Pane>
              <Tab.Pane className="row " eventKey={5}>
                {lotteryGames.products?.map((lotteryGame) => {
                  return (
                    <Link
                      key={lotteryGame.id}
                      to={"/games"}
                      className="col-6 col-lg-4 col-xl-3"
                      onClick={() => {
                        localStorage.removeItem("product_id");
                        localStorage.removeItem("gameType_id");
                        localStorage.removeItem("title");
                        localStorage.setItem("product_id", lotteryGame.id);
                        localStorage.setItem(
                          "gameType_id",
                          lotteryGame.pivot.game_type_id
                        );
                        localStorage.setItem("title", virtualGame.name);
                      }}
                    >
                      <img
                        className={`img-fluid mb-4 rounded-sm-5 gameImg`}
                        src={lotteryGame.imgUrl}
                      />
                    </Link>
                  );
                })}
              </Tab.Pane>
              <Tab.Pane className="row " eventKey={6}>
                {qipaiGames.products?.map((qipaiGame) => {
                  return (
                    <Link
                      key={qipaiGame.id}
                      to={"/games"}
                      className="col-6 col-lg-4 col-xl-3"
                      onClick={() => {
                        localStorage.removeItem("product_id");
                        localStorage.removeItem("gameType_id");
                        localStorage.removeItem("title");
                        localStorage.setItem("product_id", qipaiGame.id);
                        localStorage.setItem(
                          "gameType_id",
                          qipaiGame.pivot.game_type_id
                        );
                        localStorage.setItem("title", qipaiGame.name);
                      }}
                    >
                      <img
                        className={`img-fluid mb-4 rounded-sm-5 gameImg`}
                        src={qipaiGame.imgUrl}
                      />
                    </Link>
                  );
                })}
              </Tab.Pane>
              <Tab.Pane className="row " eventKey={7}>
                {p2pGames.products?.map((p2pGame) => {
                  return (
                    <Link
                      key={p2pGame.id}
                      to={"/games"}
                      className="col-6 col-lg-4 col-xl-3"
                      onClick={() => {
                        localStorage.removeItem("product_id");
                        localStorage.removeItem("gameType_id");
                        localStorage.removeItem("title");
                        localStorage.setItem("product_id", p2pGame.id);
                        localStorage.setItem(
                          "gameType_id",
                          p2pGame.pivot.game_type_id
                        );
                        localStorage.setItem("title", p2pGame.name);
                      }}
                    >
                      <img
                        className={`img-fluid mb-4 rounded-sm-5 gameImg`}
                        src={p2pGame.imgUrl}
                      />
                    </Link>
                  );
                })}
              </Tab.Pane>
              <Tab.Pane className="row " eventKey={8}>
                {fishingGames.products?.map((fishingGame) => {
                  return (
                    <Link
                      key={fishingGame.id}
                      to={"/games"}
                      className="col-6 col-lg-4 col-xl-3"
                      onClick={() => {
                        localStorage.removeItem("product_id");
                        localStorage.removeItem("gameType_id");
                        localStorage.removeItem("title");
                        localStorage.setItem("product_id", fishingGame.id);
                        localStorage.setItem(
                          "gameType_id",
                          fishingGame.pivot.game_type_id
                        );
                        localStorage.setItem("title", fishingGame.name);
                      }}
                    >
                      <img
                        className={`img-fluid mb-4 rounded-sm-5 gameImg`}
                        src={fishingGame.imgUrl}
                      />
                    </Link>
                  );
                })}
              </Tab.Pane>
              <Tab.Pane className="row " eventKey={9}>
                {otherGames.products?.map((otherGame) => {
                  return (
                    <Link
                      key={otherGame.id}
                      to={"/games"}
                      className="col-6 col-lg-4 col-xl-3"
                      onClick={() => {
                        localStorage.removeItem("product_id");
                        localStorage.removeItem("gameType_id");
                        localStorage.removeItem("title");
                        localStorage.setItem("product_id", otherGame.id);
                        localStorage.setItem(
                          "gameType_id",
                          otherGame.pivot.game_type_id
                        );
                        localStorage.setItem("title", otherGame.name);
                      }}
                    >
                      <img
                        className={`img-fluid mb-4 rounded-sm-5 gameImg`}
                        src={otherGame.imgUrl}
                      />
                    </Link>
                  );
                })}
              </Tab.Pane>
              <Tab.Pane className="row " eventKey={10}>
                {fightingGames.products?.map((fightingGame) => {
                  return (
                    <Link
                      key={fightingGame.id}
                      to={"/games"}
                      className="col-6 col-lg-4 col-xl-3"
                      onClick={() => {
                        localStorage.removeItem("product_id");
                        localStorage.removeItem("gameType_id");
                        localStorage.removeItem("title");
                        localStorage.setItem("product_id", fightingGame.id);
                        localStorage.setItem(
                          "gameType_id",
                          fightingGame.pivot.game_type_id
                        );
                        localStorage.setItem("title", fightingGame.name);
                      }}
                    >
                      <img
                        className={`img-fluid mb-4 rounded-sm-5 gameImg`}
                        src={fightingGame.imgUrl}
                      />
                    </Link>
                  );
                })}
              </Tab.Pane>
              <Tab.Pane className="row " eventKey={11}>
                {bonusGames.products?.map((bonusGame) => {
                  return (
                    <Link
                      key={bonusGame.id}
                      to={"/games"}
                      className="col-6 col-lg-4 col-xl-3"
                      onClick={() => {
                        localStorage.removeItem("product_id");
                        localStorage.removeItem("gameType_id");
                        localStorage.removeItem("title");
                        localStorage.setItem("product_id", bonusGame.id);
                        localStorage.setItem(
                          "gameType_id",
                          bonusGame.pivot.game_type_id
                        );
                        localStorage.setItem("title", bonusGame.name);
                      }}
                    >
                      <img
                        className={`img-fluid mb-4 rounded-sm-5 gameImg`}
                        src={bonusGame.imgUrl}
                      />
                    </Link>
                  );
                })}
              </Tab.Pane>
              <Tab.Pane className="row " eventKey={12}>
                {jackpotGames.products?.map((jackpotGame) => {
                  return (
                    <Link
                      key={jackpotGames.id}
                      to={"/games"}
                      className="col-6 col-lg-4 col-xl-3"
                      onClick={() => {
                        localStorage.removeItem("product_id");
                        localStorage.removeItem("gameType_id");
                        localStorage.removeItem("title");
                        localStorage.setItem("product_id", jackpotGame.id);
                        localStorage.setItem(
                          "gameType_id",
                          bonusGame.pivot.game_type_id
                        );
                        localStorage.setItem("title", jackpotGame.name);
                      }}
                    >
                      <img
                        className={`img-fluid mb-4 rounded-sm-5 gameImg`}
                        src={jackpotGame.imgUrl}
                      />
                    </Link>
                  );
                })}
              </Tab.Pane>
              <Tab.Pane className="row " eventKey={13}>
                {esportGames.products?.map((esportGame) => {
                  return (
                    <Link
                      key={esportGame.id}
                      to={"/games"}
                      className="col-6 col-lg-4 col-xl-3"
                      onClick={() => {
                        localStorage.removeItem("product_id");
                        localStorage.removeItem("gameType_id");
                        localStorage.removeItem("title");
                        localStorage.setItem("product_id", esportGame.id);
                        localStorage.setItem(
                          "gameType_id",
                          esportGame.pivot.game_type_id
                        );
                        localStorage.setItem("title", esportGame.name);
                      }}
                    >
                      <img
                        className={`img-fluid mb-4 rounded-sm-5 gameImg`}
                        src={esportGame.imgUrl}
                      />
                    </Link>
                  );
                })}
              </Tab.Pane>

              {/* <Tab.Pane className="row " eventKey={2}>
                {hotGames?.map((hotGame) => {
                  return (
                    <img
                      style={{ objectFit: "cover" }}
                      className={`img-fluid hotGameImg  col-6 col-lg-4 col-xl-3 mb-4  rounded-sm-5`}
                      src={hotGame.img_url}
                      onClick={() => launchGame(hotGame.id)}
                    />
                  );
                })}
              </Tab.Pane> */}
              <Tab.Pane className="row " eventKey={0}>
                {slotGames.length != 0 && (
                  <>
                  <div className="d-flex">
                    <h2 className="text-light mb-4">Slots </h2>
                    {/* <div>
                      <span className="badge text-bg-primary">{slotGames?.products?.length}</span>
                    </div> */}
                  </div>
                    
                    {slotGames && slotGames.products?.map((game) => {
                      return (
                        <Link
                          key={game.id}
                          to={"/games"}
                          className="col-6 col-lg-4 col-xl-3 mb-4"
                          onClick={() => {
                            localStorage.removeItem("product_id");
                            localStorage.removeItem("gameType_id");
                            localStorage.removeItem("title");
                            localStorage.setItem("product_id", game.id);
                            localStorage.setItem(
                              "gameType_id",
                              game.pivot.game_type_id
                            );
                            localStorage.setItem("title", game.name);
                          }}
                        >
                          <img
                            className={`img-fluid rounded-sm-5 gameImg `}
                            src={game.imgUrl}
                          />
                        </Link>
                      );
                    })}
                  </>
                )}

                {sportGames.length != 0 && (
                  <>
                    <h2 className="text-light mb-4 mt-5">Sports</h2>
                    {sportGames && sportGames.products?.map((game) => {
                      return (
                        <Link
                          key={game.id}
                          to={"/games"}
                          className="col-6 col-lg-4 col-xl-3 mb-4"
                          onClick={() => {
                            localStorage.removeItem("product_id");
                            localStorage.removeItem("gameType_id");
                            localStorage.removeItem("title");
                            localStorage.setItem("product_id", game.id);
                            localStorage.setItem(
                              "gameType_id",
                              game.pivot.game_type_id
                            );
                            localStorage.setItem("title", game.name);
                          }}
                        >
                          <img
                            className={`img-fluid rounded-sm-5 gameImg `}
                            src={game.imgUrl}
                          />
                        </Link>
                      );
                    })}
                  </>
                )}

                {casinoGames.length != 0 && (
                  <>
                    <h2 className="text-light mb-4 mt-5">Live Casino</h2>
                    {casinoGames && casinoGames.products?.map((game) => {
                      return (
                        <Link
                          key={game.id}
                          to={"/games"}
                          className="col-6 col-lg-4 col-xl-3 mb-4"
                          onClick={() => {
                            localStorage.removeItem("product_id");
                            localStorage.removeItem("gameType_id");
                            localStorage.removeItem("title");
                            localStorage.setItem("product_id", game.id);
                            localStorage.setItem(
                              "gameType_id",
                              game.pivot.game_type_id
                            );
                            localStorage.setItem("title", game.name);
                          }}
                        >
                          <img
                            className={`img-fluid rounded-sm-5 gameImg `}
                            src={game.imgUrl}
                          />
                        </Link>
                      );
                    })}
                  </>
                )}

                {virtualGames.length != 0 && (
                  <>
                    <h2 className="text-light mb-4 mt-5">Virtual Game</h2>
                    {virtualGames && virtualGames.products?.map((game) => {
                      return (
                        <Link
                          key={game.id}
                          to={"/games"}
                          className="col-6 col-lg-4 col-xl-3 mb-4"
                          onClick={() => {
                            localStorage.removeItem("product_id");
                            localStorage.removeItem("gameType_id");
                            localStorage.removeItem("title");
                            localStorage.setItem("product_id", game.id);
                            localStorage.setItem(
                              "gameType_id",
                              game.pivot.game_type_id
                            );
                            localStorage.setItem("title", game.name);
                          }}
                        >
                          <img
                            className={`img-fluid rounded-sm-5 gameImg `}
                            src={game.imgUrl}
                          />
                        </Link>
                      );
                    })}
                  </>
                )}

                {lotteryGames.length != 0 && (
                  <>
                    <h2 className="text-light mb-4 mt-5">Lottery Game</h2>
                    {lotteryGames && lotteryGames.products?.map((game) => {
                      return (
                        <Link
                          key={game.id}
                          to={"/games"}
                          className="col-6 col-lg-4 col-xl-3 mb-4"
                          onClick={() => {
                            localStorage.removeItem("product_id");
                            localStorage.removeItem("gameType_id");
                            localStorage.removeItem("title");
                            localStorage.setItem("product_id", game.id);
                            localStorage.setItem(
                              "gameType_id",
                              game.pivot.game_type_id
                            );
                            localStorage.setItem("title", game.name);
                          }}
                        >
                          <img
                            className={`img-fluid rounded-sm-5 gameImg `}
                            src={game.imgUrl}
                          />
                        </Link>
                      );
                    })}
                  </>
                )}

                {qipaiGames.length != 0 && (
                  <>
                    <h2 className="text-light mb-4 mt-5">QiPai Games</h2>
                    {qipaiGames && qipaiGames.products?.map((game) => {
                      return (
                        <Link
                          key={game.id}
                          to={"/games"}
                          className="col-6 col-lg-4 col-xl-3 mb-4"
                          onClick={() => {
                            localStorage.removeItem("product_id");
                            localStorage.removeItem("gameType_id");
                            localStorage.removeItem("title");
                            localStorage.setItem("product_id", game.id);
                            localStorage.setItem(
                              "gameType_id",
                              game.pivot.game_type_id
                            );
                            localStorage.setItem("title", game.name);
                          }}
                        >
                          <img
                            className={`img-fluid rounded-sm-5 gameImg `}
                            src={game.imgUrl}
                          />
                        </Link>
                      );
                    })}
                  </>
                )}

                {p2pGames.length != 0 && (
                  <>
                    <h2 className="text-light mb-4 mt-5">P2P Games</h2>
                    {p2pGames && p2pGames.products?.map((game) => {
                      return (
                        <Link
                          key={game.id}
                          to={"/games"}
                          className="col-6 col-lg-4 col-xl-3 mb-4"
                          onClick={() => {
                            localStorage.removeItem("product_id");
                            localStorage.removeItem("gameType_id");
                            localStorage.removeItem("title");
                            localStorage.setItem("product_id", game.id);
                            localStorage.setItem(
                              "gameType_id",
                              game.pivot.game_type_id
                            );
                            localStorage.setItem("title", game.name);
                          }}
                        >
                          <img
                            className={`img-fluid rounded-sm-5 gameImg `}
                            src={game.imgUrl}
                          />
                        </Link>
                      );
                    })}
                  </>
                )}

                {fishingGames.length != 0 && (
                  <>
                    <h2 className="text-light mb-4 mt-5">Fishing</h2>
                    {fishingGames && fishingGames.products?.map((game) => {
                      return (
                        <Link
                          key={game.id}
                          to={"/games"}
                          className="col-6 col-lg-4 col-xl-3 mb-4"
                          onClick={() => {
                            localStorage.removeItem("product_id");
                            localStorage.removeItem("gameType_id");
                            localStorage.removeItem("title");
                            localStorage.setItem("product_id", game.id);
                            localStorage.setItem(
                              "gameType_id",
                              game.pivot.game_type_id
                            );
                            localStorage.setItem("title", game.name);
                          }}
                        >
                          <img
                            className={`img-fluid rounded-sm-5 gameImg `}
                            src={game.imgUrl}
                          />
                        </Link>
                      );
                    })}
                  </>
                )}

                {otherGames.length != 0 && (
                  <>
                    <h2 className="text-light mb-4 mt-5">Other Games</h2>
                    {otherGames && otherGames.products?.map((game) => {
                      return (
                        <Link
                          key={game.id}
                          to={"/games"}
                          className="col-6 col-lg-4 col-xl-3 mb-4"
                          onClick={() => {
                            localStorage.removeItem("product_id");
                            localStorage.removeItem("gameType_id");
                            localStorage.removeItem("title");
                            localStorage.setItem("product_id", game.id);
                            localStorage.setItem(
                              "gameType_id",
                              game.pivot.game_type_id
                            );
                            localStorage.setItem("title", game.name);
                          }}
                        >
                          <img
                            className={`img-fluid rounded-sm-5 gameImg `}
                            src={game.imgUrl}
                          />
                        </Link>
                      );
                    })}
                  </>
                )}

                {fightingGames.length != 0 && (
                  <>
                    <h2 className="text-light mb-4 mt-5">Cork Fighting</h2>
                    {fightingGames && fightingGames.products?.map((game) => {
                      return (
                        <Link
                          key={game.id}
                          to={"/games"}
                          className="col-6 col-lg-4 col-xl-3 mb-4"
                          onClick={() => {
                            localStorage.removeItem("product_id");
                            localStorage.removeItem("gameType_id");
                            localStorage.removeItem("title");
                            localStorage.setItem("product_id", game.id);
                            localStorage.setItem(
                              "gameType_id",
                              game.pivot.game_type_id
                            );
                            localStorage.setItem("title", game.name);
                          }}
                        >
                          <img
                            className={`img-fluid rounded-sm-5 gameImg `}
                            src={game.imgUrl}
                          />
                        </Link>
                      );
                    })}
                  </>
                )}

                {bonusGames.length != 0 && (
                  <>
                    <h2 className="text-light mb-4 mt-5">Bonus Games</h2>
                    {bonusGames && bonusGames.products?.map((game) => {
                      return (
                        <Link
                          key={game.id}
                          to={"/games"}
                          className="col-6 col-lg-4 col-xl-3 mb-4"
                          onClick={() => {
                            localStorage.removeItem("product_id");
                            localStorage.removeItem("gameType_id");
                            localStorage.removeItem("title");
                            localStorage.setItem("product_id", game.id);
                            localStorage.setItem(
                              "gameType_id",
                              game.pivot.game_type_id
                            );
                            localStorage.setItem("title", game.name);
                          }}
                        >
                          <img
                            className={`img-fluid rounded-sm-5 gameImg `}
                            src={game.imgUrl}
                          />
                        </Link>
                      );
                    })}
                  </>
                )}

                {jackpotGames.length != 0 && (
                  <>
                    <h2 className="text-light mb-4 mt-5">Jackpot</h2>
                    {jackpotGames && jackpotGames.products?.map((game) => {
                      return (
                        <Link
                          key={game.id}
                          to={"/games"}
                          className="col-6 col-lg-4 col-xl-3 mb-4"
                          onClick={() => {
                            localStorage.removeItem("product_id");
                            localStorage.removeItem("gameType_id");
                            localStorage.removeItem("title");
                            localStorage.setItem("product_id", game.id);
                            localStorage.setItem(
                              "gameType_id",
                              game.pivot.game_type_id
                            );
                            localStorage.setItem("title", game.name);
                          }}
                        >
                          <img
                            className={`img-fluid rounded-sm-5 gameImg `}
                            src={game.imgUrl}
                          />
                        </Link>
                      );
                    })}
                  </>
                )}

                {esportGames.length != 0 && (
                  <>
                    <h2 className="text-light mb-4 mt-5">Esport</h2>
                    {esportGames && esportGames.products?.map((game) => {
                      return (
                        <Link
                          key={game.id}
                          to={"/games"}
                          className="col-6 col-lg-4 col-xl-3 mb-4"
                          onClick={() => {
                            localStorage.removeItem("product_id");
                            localStorage.removeItem("gameType_id");
                            localStorage.removeItem("title");
                            localStorage.setItem("product_id", game.id);
                            localStorage.setItem(
                              "gameType_id",
                              game.pivot.game_type_id
                            );
                            localStorage.setItem("title", game.name);
                          }}
                        >
                          <img
                            className={`img-fluid rounded-sm-5 gameImg `}
                            src={game.imgUrl}
                          />
                        </Link>
                      );
                    })}
                  </>
                )}
              </Tab.Pane>
            </div>
          </Tab.Content>
        </div>
      </div>
    </Tab.Container>
  );
}

export default HomeTabs;

const AllGamesContent = () => {
  const sports = [sports2, sport3, sport4];
  // {id:2,imgs:[esport1,esport1,esport1]},
  const casinos = [casino1, casino2, casino3, casino4];
  const slots = [slot1, slot2, slot3, slot4, slot5, slot6, slot7, slot8];
  return (
    <div className="ms-1">
      <div className="mb-5 ">
        <h3 className="text-white mb-3">Slots</h3>
        <div className="row">
          {slots.map((img) => {
            return (
              <img
                className="img-fluid gameImg col-6  col-lg-4 col-xl-3 mb-4 "
                src={img}
              />
            );
          })}
        </div>
      </div>
      <div className="mb-5 ">
        <h3 className="text-white mb-3">Sports</h3>
        <div className="row">
          {sports.map((img) => {
            return (
              <img
                className=" col-6  col-lg-4  col-xl-3 mb-4  img-fluid gameImg"
                src={img}
              />
            );
          })}
        </div>
      </div>
      <div className="mb-5 ">
        <h3 className="text-white mb-3">Live-Casinos</h3>
        <div className="row">
          {casinos.map((img) => {
            return (
              <img
                className="col-6 col-lg-4 col-xl-3 mb-4  img-fluid gameImg"
                src={img}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
