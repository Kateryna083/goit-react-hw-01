import FriendListItem from "./FriendListItem";
// import css from "";

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id}>
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
