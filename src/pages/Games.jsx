import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import BASE_URL from "../hooks/baseURL";
import { useNavigate } from "react-router-dom";

export default function Games() {
  let auth = localStorage.getItem("authToken");
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, []);
  let providerId = localStorage.getItem("provider_id");
  let gameTypeId = localStorage.getItem("gameType_id");
  let gameTitle = localStorage.getItem("title");

  const {
    data: games,
    loading,
    error,
  } = useFetch(
    BASE_URL + "/gamedetail/" + providerId + "/game_type/" + gameTypeId
  );
  console.log(games);
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
        // console.log(data);
        window.location.href = data.data;
      })
      .catch((error) => {
        console.error("Launch Game error:", error);
      });
  };
  return (
    <>
      <div className="container-fluid my-5">
        <h3 className="text-center mb-5 text-light">{gameTitle}</h3>
        <div className="row">
          {games &&
            games.map((game, index) => (
              <div
                className="col-lg-2 col-md-3 col-4 mb-4 text-center"
                key={index}
              >
                {auth && (
                  <>
                    <div
                      onClick={() => launchGame(game.id)}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={game.image}
                        className="img-fluid rounded shadow"
                        alt=""
                      />
                      {/* <p className="text-white mt-3">{game.name_en}</p> */}
                    </div>
                  </>
                )}
                {!auth && (
                  <Link className="text-decoration-none" to={"/login"}>
                    <img
                      src={game.image}
                      className="img-fluid rounded shadow"
                      alt=""
                    />
                    {/* <p className="text-white mt-3">{game.name_en}</p> */}
                  </Link>
                )}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
