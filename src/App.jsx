import userData from "./data/userData.json";
import friends from "./data/friendsData.json";
import transactions from "./data/transactionsData.json";

import Profile from "./components/task1/Profile.jsx";
import FriendList from "./components/task2/FriendList.jsx";
import TransactionHistory from "./components/task3/TransactionHistory.jsx";

function App() {
  return (
    <>
      <h2>Завдання 1. Профіль соціальної мережі</h2>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <hr />

      <h2>Завдання 2. Список друзів</h2>
      <FriendList friends={friends} />
      <hr />

      <h2>Завдання 3. Історія транзакцій</h2>
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
