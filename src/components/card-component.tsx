import React from "react";
import { CardData } from "../utils/card-components-data";
import { useNavigate } from "react-router-dom";
import style from "./card-component.module.css";

const CardComponent = () => {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      {CardData.map((data) => {
        return (
          <div
            key={data.id}
            className={style.container__card}
            onClick={() => navigate(data.route)}
          >
            <h2 className={style["container__card--title"]}>{data.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default CardComponent;
