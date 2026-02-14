import { restaurants } from "../data/restaurants";
import img1 from "../assets/image1.jpeg";
import img2 from "../assets/image2.jpeg";
export default function Restaurants() {
  return (
    <div>
      <h2>Restaurants</h2>
      {restaurants.map((r) => (
        <p key={r.id}>{r.name}{r.image}</p>
      ))}

    </div>
  );
}
