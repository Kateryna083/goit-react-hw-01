import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import data from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";
// import css from "./App.css";

const App = () => {
  return (
    <>
      <Profile profile={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};

export default App;
