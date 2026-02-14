const TableCard = ({ table, onReserve }) => {
  return (
    <div className="card">
      <p>
        Table {table.id} - {table.seats} places -
        <span className={table.available ? "available" : "unavailable"}>
          {table.available ? " Available" : " Reserved"}
        </span>
      </p>

      {table.available && (
        <button onClick={onReserve}>Reserve</button>
      )}
    </div>
  );
};

export default TableCard;
