import { FC, useEffect, useState } from 'react';
import { TeamsResponse, Team } from '@/@types/pages/teams';
// import TeamCard from '@/components/TeamCard/TeamCard';
import Header1 from '@/components/Headers/Header1';
import { requestApi } from '@/api/nba';
import TeamCard from '@/components/TeamCard/TeamCard';
import { Spinner } from '@nextui-org/react';
import { Link } from 'react-router-dom';

const TeamsPage: FC = () => {
  const [loading, setLoading] = useState(true);

  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    setLoading(true);
    requestApi<TeamsResponse>('/teams')
      .then(({ response }) => {
				setTeams([...response])
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
				setTeams([])
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header1>Teams</Header1>

      {loading ? (
          <Spinner color="warning"/>
      ) : (
        <div className='flex flex-wrap gap-2 justify-center'>
          {teams.map(team => (
            <Link key={team.id} to={`/teams/${team.id}`}>
              <TeamCard team={team} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default TeamsPage;
