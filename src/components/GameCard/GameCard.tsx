import { FC } from 'react';
import { GameCardProps } from './interfaces';
import { Card, CardBody, CardHeader } from '@nextui-org/react';


const GameCard: FC<GameCardProps> = ({
  league,
  season,
  date,
  arena,
  teams,
  scores,
}) => (
  <Card className='w-80 h-auto'>
    <CardHeader className='flex justify-around'>
   
        <img
          src={teams.home.logo || '/notFound.jpeg'}
          alt={teams.home.name}
          width={80}
          height={80}
        />
    
        <img
          src={teams.visitors.logo || '/notFound.jpeg'}
          alt={teams.visitors.name}
          width={80}
          height={80}
        />
      
    </CardHeader>
    <CardBody className='leading-relaxed'>
      <div>
        <p>
          Teams:&nbsp;
          <strong>{teams.home.nickname}</strong> VS&nbsp;
          <strong>{teams.visitors.nickname}</strong>
        </p>
      </div>
      <div>
        <p>Season: {season}</p>
      </div>
      <div>
        <p>
          League: <span className='capitalize'>{league}</span>
        </p>
      </div>
      <div>
        <p>Date: {new Date(date.start).toDateString()}</p>
      </div>
      <div>
        <p>City: {arena.city}</p>
      </div>
      <div>
        <p>Arena: {arena.name}</p>
      </div>
      <div>
        Final Score: <strong>{scores.home.points}</strong> -&nbsp;
        <strong>{scores.visitors.points}</strong>
      </div>
    </CardBody>
  </Card>
);
export default GameCard;
