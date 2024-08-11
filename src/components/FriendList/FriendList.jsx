import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className={css.listItem} key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}

// return (
//   <ul>
//     {friends.map((item) => {
//       return (
//         <li key={item.id}>
//           <FriendList friend={item} />
//         </li>
//       );
//     })}
//   </ul>
// );
