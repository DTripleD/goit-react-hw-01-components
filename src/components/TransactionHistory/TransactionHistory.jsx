import PropTypes from 'prop-types';
import { Table, THead, Td, Th } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table className="transaction-history">
      <THead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </THead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <Td>{item.type}</Td>
            <Td>{item.amount}</Td>
            <Td>{item.currency}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
