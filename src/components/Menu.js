/*const Menu = ({ menu = [], onSelect }) => {
  return (
    <div className="menu">
      <h3>Menu</h3>

      <div className="menu-grid">
        {menu.map((item) => (
          <div
            key={item.id}
            className="menu-card"
            onClick={() => onSelect(item)}
          >
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.price} DH</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;*/
const Menu = ({ menu = [], onSelect }) => {
  return (
    <div className="menu">
      <h3>Menu</h3>

      <div className="menu-grid">
        {menu.map((item) => (
          <div
            key={item.id}
            className="menu-card"
            onClick={() => onSelect(item)}
          >
          
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.price} DH</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;













