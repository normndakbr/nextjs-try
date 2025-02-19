import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>TESTING</h1>
      <br />
      <br />
      <Link href="/posts">POSTS</Link>
      <br />
      <Link href="albums">ALBUMS</Link>
      <br />
    </>
  );
}
