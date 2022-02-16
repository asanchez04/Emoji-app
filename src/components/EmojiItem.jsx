export function EmojiItem({title, symbol, keywords}) {
  return (
    <div>
      <div className="card">
        <h5 className="card-header">{title}</h5>
        <div className="card-body">
            <h2>{symbol}</h2> 
          <p className="card-text">
            {keywords}
          </p>
        </div>
      </div>
    </div>
  );
}
