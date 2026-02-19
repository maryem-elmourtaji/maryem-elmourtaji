const Menu = ({ menu = [], onSelect }) => {
  return (
    <div className="menu">
      <h3>Menu</h3>

      <div className="menu-grid">
        {menu.map((item) => {
          const imagePath = item.image.startsWith("http")
            ? item.image
            : `/images/${item.image}`;

          return (
            <div
              key={item.id}
              className="menu-card"
              onClick={() => onSelect(item)}
            >
              <img src={imagePath} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.price} DH</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
