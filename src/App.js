import { Fragment } from 'react';
import user from './data/user.json';
import Section from './components/Section';
import Profile from './components/Profile';
// import Statistics from 'components/Statistics/Statistics';
import ItemsList from './components/Statistics/ItemsList';
import statisticsData from './data/data.json';

export const App = () => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user;
  return (
    <>
      <Section title="Profile section">
        <Profile
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          followers={followers}
          views={views}
          likes={likes}
        />
      </Section>
      <Section title="Upload stats">
        <ItemsList items={statisticsData} />
      </Section>
      <Section title="Friend list section"></Section>
      <Section title="Transactions history section"></Section>
    </>
  );
};
