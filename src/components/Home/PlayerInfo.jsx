import React from "react";
import download from "../../assets/img/playerInfo/download.png";
import deposit from "../../assets/img/playerInfo/deposit.png";
import transfer from "../../assets/img/playerInfo/transfer.png";
import withdraw from "../../assets/img/playerInfo/withdraw.png";
import { NavLink } from "react-router-dom";

const PlayerInfo = () => {
  const playerInfos = [
    { img: deposit, title: "Deposit", link: "/deposit?tab=deposit" },
    { img: transfer, title: "Transfer", link: "/deposit?tab=transfer" },
    { img: withdraw, title: "With Draw", link: "/deposit?tab=withdraw" },
  ];
  return (
    <div className="px-2 px-sm-5  d-flex  justify-content-between  ">
      {playerInfos.map((item, index) => {
        return (
          <NavLink
            key={index}
            className="d-flex flex-column align-items-center align-items-center text-decoration-none"
            to={item.link}
          >
            <img className="playerInfoImg" src={item.img} alt={item.title} />
            <span className="fw-bolder text-light playerInfoTitle">
              {item.title}
            </span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default PlayerInfo;
