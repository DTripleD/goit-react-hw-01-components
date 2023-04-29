import PropTypes from 'prop-types';
import { List, ListItem, ItemLabel, StatisticsSection } from './Statics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <h2 className="title">{title}</h2>}

      <List>
        {stats.map(item => (
          <ListItem
            key={item.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <ItemLabel>{item.label}</ItemLabel>
            <span>{item.percentage}%</span>
          </ListItem>
        ))}
      </List>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
