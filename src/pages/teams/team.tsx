import { FC, useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  Table,
  TableBody,
  TableColumn,
  TableHeader,
  TableCell,
  TableRow,
  Spinner,
} from '@nextui-org/react';

import { Player } from '@/@types/pages/players';
import { TeamResponse, Team } from '@/@types/pages/team';
import { PlayersResponse } from '@/@types/pages/players';

import Header1 from '@/components/Headers/Header1';
import { requestApi } from '@/api/nba';
import { useParams } from 'react-router-dom';

const TeamPage: FC = () => {
  const [loading, setLoading] = useState(true);

  const [team, setTeam] = useState<Team | null>(null);
  const [players, setPlayers] = useState<Player[]>([]);

  const { id } = useParams();

  useEffect(() => {
		console.log(id)
    setLoading(true);

    Promise.all([
      requestApi<TeamResponse>('/teams', `?id=${id}`),
      requestApi<PlayersResponse>('/players', `?team=${id}&season=2022`),
    ])
      .then(([teamResponse, playersResponse]) => {
        const [team] = teamResponse.response;
        setTeam(team);
        setPlayers([...playersResponse.response]);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setTeam(null);
        setPlayers([]);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      {loading ? (
        <Spinner color='warning' />
      ) : team ? (
        <>
          <Header1>{team.name}</Header1>
          <Card
            isBlurred
            className='border-none bg-background/60 dark:bg-default-100/50 w-full max-w-screen-xl'
            shadow='sm'
          >
            <CardBody>
              <div className='items-center justify-center grid grid-cols-12 grid-rows-2 lg:grid-rows-1'>
                <div className='col-span-12 lg:col-span-4'>
                  <img
                    src={team.logo || '/notFound.jpeg'}
                    alt={team.name}
                    width={300}
                    height={0}
                    className='mx-auto '
                  />
                </div>
                <div className='col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-6 leading-8 md:leading-10'>
                  <div className='col-span-1 md:col-span-2 md:col-start-2'>
                    <p>
                      <strong>Id</strong>: #{team.id}
                    </p>
                    <p>
                      <strong>Name</strong>: {team.name}
                    </p>
                    <p>
                      <strong>Nickname</strong>: {team.nickname}
                    </p>
                    <p>
                      <strong>City</strong>: {team.city}
                    </p>
                  </div>

                  <div className='col-span-1 md:col-span-2'>
                    <p>
                      <strong>Leagues</strong>:
                    </p>
                    <p>
                      Sacramento: {team.leagues.sacramento?.conference} -{' '}
                      {team.leagues.sacramento?.division}
                    </p>
                    <p>
                      Standard: {team.leagues.standard?.conference} -{' '}
                      {team.leagues.standard?.division}
                    </p>
                    <p>
                      Utah: {team.leagues.utah?.conference} -{' '}
                      {team.leagues.utah?.division}
                    </p>
                    <p>
                      Vegas: {team.leagues.vegas?.conference} -{' '}
                      {team.leagues.vegas?.division}
                    </p>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>

          <h2>Players</h2>

          <Table
            className='w-full max-w-screen-xl max-h-[600px] md:max-h-fit'
            isHeaderSticky
            aria-label={`Table of ${team.name} players`}
          >
            <TableHeader>
              <TableColumn>Id</TableColumn>
              <TableColumn>First Name</TableColumn>
              <TableColumn>Last Name</TableColumn>
              <TableColumn>Country</TableColumn>
              <TableColumn>Birth</TableColumn>
              <TableColumn>Height (mts)</TableColumn>
              <TableColumn>Weight (kgs)</TableColumn>
            </TableHeader>
            <TableBody>
              {players.map(
                ({ id, firstname, lastname, birth, height, weight }) => (
                  <TableRow key={id}>
                    <TableCell>{id}</TableCell>
                    <TableCell>{firstname}</TableCell>
                    <TableCell>{lastname}</TableCell>
                    <TableCell>{birth.country}</TableCell>
                    <TableCell>{birth.date}</TableCell>
                    <TableCell>{height.meters}</TableCell>
                    <TableCell>{weight.kilograms}</TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </>
      ) : (
				<Header1>404 Team not Found</Header1>
      )}
    </>
  );
};

export default TeamPage;
