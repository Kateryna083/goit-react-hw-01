import css from "./Profile.module.css";

export default function Profile({
  profile: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={css.container}>
      <div className={css.avatarContainer}>
        <img className={css.avatar} src={avatar} alt={username} width={150} />
        <p className={css.title}>{username}</p>
        <p className={css.description}>@{tag}</p>
        <p className={css.description}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.itemList}>
          <span>Followers</span>
          <span className={css.stats}>{followers}</span>
        </li>
        <li className={css.itemList}>
          <span>Views</span>
          <span className={css.stats}>{views}</span>
        </li>
        <li className={css.itemList}>
          <span>Likes</span>
          <span className={css.stats}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
