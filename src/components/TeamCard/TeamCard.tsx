import { FC } from 'react';
import { TeamCardProps } from './interfaces';
import { Card, CardBody, CardHeader } from '@nextui-org/react';

const TeamCard: FC<TeamCardProps> = ({ team: { id, logo, name, city } }) => {
  return (
    <Card className='w-80 h-auto' shadow='sm'>
      <CardHeader className='h-40'>
        <div className='w-full h-full flex justify-center'>
          <img
            src={logo || '/notFound.jpeg'}
            alt={name}
            width={120}
            height={0}
            className='w-auto h-auto'
          />
        </div>
      </CardHeader>
      <CardBody className='leading-relaxed'>
        <div>
          <p>Id: #{id}</p>
          <p>
            Teams:&nbsp;
            <strong>{name}</strong>
          </p>
        </div>
        <div>
          <p>
            City:&nbsp;
            <strong>{city}</strong>
          </p>
        </div>
      </CardBody>
    </Card>
  );
};
export default TeamCard;
