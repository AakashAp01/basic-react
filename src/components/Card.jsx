
function Card({username,description}) {
  return (

    <div className="w-64 h-80 m-10 bg-white rounded-xl shadow-lg overflow-hidden">
      <img
        src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
        alt="Giphy"
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-800 mb-2">{username}</h1>
        <p className="text-gray-600 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
