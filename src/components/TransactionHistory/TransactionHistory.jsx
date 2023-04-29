import PropTypes from "prop-types";
import {Table, THead, Td, Th, Tr} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table className="transaction-history">
      <THead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </THead>

      <tbody>
        {items.map(item => (
          <Tr key={item.id}>
            <Td>{item.type}</Td>
            <Td>{item.amount}</Td>
            <Td>{item.currency}</Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
  };
