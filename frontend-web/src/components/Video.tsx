import { RiDeleteBin6Line } from "react-icons/ri";

interface Props {
  title: string;
  url: string;
  onRemove?: () => void;
}

const Video = ({ title, url, onRemove }: Props) => {
  return (
    <div className="card" style={{ width: "16rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{url}</p>
        <a href="#" className="btn btn-primary">
          View Details
        </a>
        <button className="btn btn-danger m-3" onClick={onRemove}>
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
};

export default Video;
