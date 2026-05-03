export default function Posts({ crash }) {
  if (crash) {
    throw new Error("Posts crashed!");
  }

  return <h2>Posts list</h2>;
}