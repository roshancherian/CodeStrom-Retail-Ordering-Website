import { useParams } from "react-router-dom";
import MenuList from "../components/MenuList";

function MenuPage() {
  const { id } = useParams();  // gets restaurant id from URL

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Menu</h2>
      <MenuList restId={id} />
    </div>
  );
}

export default MenuPage;