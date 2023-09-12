import style from "./CardsContainer.module.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";

const CardsContainer = () => {
  const games = useSelector((state) => state.allVideoGames);

  const gamesAtPage = 15;
  const pagesNumber = Math.ceil(games.length / gamesAtPage);
  const pagesArray = Array.from(
    { length: pagesNumber },
    (_, index) => index + 1
  );

  const [page, setPage] = useState(1);
  
  return (
    <>
    <article className={style.cardContainer}>
      {games.slice(gamesAtPage * (page - 1), gamesAtPage * page).map((game) => (
        <Link className={style.link} to={`/detail/${game.id}`} key={game.id}>
          <Card game={game} />
        </Link>
      ))}
      </article>
      <div>
        <Pagination
          page={page}
          setPage={setPage}
          pagesArray={pagesArray}
          pagesNumber={pagesNumber}
        />
      </div>
      </>
  );
};

export default CardsContainer;
