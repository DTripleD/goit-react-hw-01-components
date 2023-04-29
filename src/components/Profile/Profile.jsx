import PropTypes from 'prop-types';
// import css from './Profile.module.css';
import {
  Image,
  ProfileWrapper,
  DescriptionWrapper,
  Name,
  Tag,
  Location,
  StatsList,
  StatsItem,
  StatsLabel,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileWrapper>
      <DescriptionWrapper>
        <Image src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </DescriptionWrapper>

      <StatsList>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <span>{followers}</span>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <span>{views}</span>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <span>{likes}</span>
        </StatsItem>
      </StatsList>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
