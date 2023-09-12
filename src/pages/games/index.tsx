import { FC, useEffect, useState } from 'react';
import Header1 from '@/components/Headers/Header1';
import { requestApi } from '@/api/nba';
import { Game, GamesResponse } from '@/@types/pages/games';
import GameCard from '@/components/GameCard/GameCard';
import { Spinner } from '@nextui-org/react';

const GamesPage: FC = () => {
  const [loading, setLoading] = useState(true);

  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    setLoading(true);
    requestApi<GamesResponse>('/games','?season=2022&team=8')
      .then(({ response }) => {
				console.log(response)
        setGames([...response]);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setGames([]);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header1>Games</Header1>

      {loading ? (
        <Spinner color='warning' />
      ) : (
        <div className='flex flex-wrap gap-2 justify-center'>
          {games.map(({ id, league, season, date, arena, teams, scores }) => (
            <GameCard
              key={id}
              id={id}
              league={league}
              season={season}
              date={date}
              arena={arena}
              teams={teams}
              scores={scores}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default GamesPage;
