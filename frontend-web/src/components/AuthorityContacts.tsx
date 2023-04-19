import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
interface Props {
  countryName: string;
  sectorName: string;
  phoneNumber: number;
  email: string;
  onRemove?: () => void;
}

const AuthorityContacts = ({
  countryName,
  sectorName,
  phoneNumber,
  email,
  onRemove,
}: Props) => {
  return (
    <div className="card" style={{ width: "30rem" }}>
      <div className="card-body row">
        <div className="col">
          <img src="123" alt="The images" />
        </div>

        <div className="col">
          <h5 className="card-title">{countryName}</h5>
          <p className="text-muted">{sectorName}</p>
          <p className="card-text">{phoneNumber}</p>
          <h5>
            <AiOutlineMail />
            {email}
          </h5>
          <div className="row">
            <button className="btn btn-danger col" onClick={onRemove}>
              <RiDeleteBin6Line />
            </button>
            <h5 className="col">
              <BiEdit />
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorityContacts;
