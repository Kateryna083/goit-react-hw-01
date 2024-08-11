import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import data from "../../userData.json";
import friends from "../../friends.json";
import transactions from "../../transactions.json";

import "./App.css";

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
