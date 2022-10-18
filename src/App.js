import { Fragment } from 'react';
import user from './user.json';
import Section from './components/Section';
import Profile from './components/Profile';

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
      <Section title="Statistics section"></Section>
      <Section title="Friend list section"></Section>
      <Section title="Transactions history section"></Section>
    </>
  );
};
