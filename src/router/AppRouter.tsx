import { GamesPage, HomePage, TeamsPage } from '@/pages';
import TeamPage from '@/pages/teams/team';
import { Route, Routes } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/teams' element={<TeamsPage />}></Route>
        <Route path='/teams/:id' element={<TeamPage />}></Route>
        <Route path='/games' element={<GamesPage />}></Route>
      </Routes>
    </>
  );
};
