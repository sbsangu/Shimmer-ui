
const MemeCard = ({ data }) => {

 const {url,author} = data;
  return (
    <div className="p-4">
      {data && (
        <>
          <img
            alt="meme"
            src={url}
            className="w-64 h-64 border border-b"
          />
          <p>{author}</p>
        </>
      )}
    </div>
  );
};

export default MemeCard;
