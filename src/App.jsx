import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import data from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

const App = () => {
  return (
    <>
      <Profile data={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />

      <h1>hello world!!!!!!!!!!!!</h1>
    </>
  );
};

export default App;
