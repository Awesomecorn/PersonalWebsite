'use client';
import LikeButton from "../app/likebutton";
import NavBar from "../components/navBar";

export default function Home() {
    const names = ['Programming', 'Skills', 'Projects'];
  return (
    <div>
    <NavBar />
    <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
          <LikeButton />
    </div>
  );
}