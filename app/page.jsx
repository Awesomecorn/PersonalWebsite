 import LikeButton from "./likebutton";
import NavBar from "./navBar";
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}
 
export default function HomePage() {
  const names = ['Programming', 'Skills', 'Projects'];
 
 
  return (
    <div>
    <NavBar />
      <Header title="Cornelius Pavlic's Website" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
          <LikeButton />
    </div>
  );
}