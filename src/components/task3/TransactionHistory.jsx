import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionTable}>
      <thead className={styles.tableHead}>
        <tr>
          <th className={styles.headCell}>Type</th>
          <th className={styles.headCell}>Amount</th>
          <th className={styles.headCell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={styles.row}>
            <td className={styles.cell}>{type}</td>
            <td className={styles.cell}>{amount}</td>
            <td className={styles.cell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
