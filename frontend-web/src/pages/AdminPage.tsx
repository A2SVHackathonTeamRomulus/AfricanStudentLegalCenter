import NavBar from "../components/NavBar";
import Blog from "../components/Blog";
import AuthorityContacts from "../components/AuthorityContacts";
import Video from "../components/Video";
import { useState } from "react";
import AddBlog from "../components/Common/AddBlog";
import AddVideo from "../components/Common/AddVideo";
import AddContact from "../components/Common/AddContact";

function AdminPage() {
  const [addBlog, setAddBlog] = useState(false);
  const [addVideo, setAddVideo] = useState(false);
  const [addContact, setAddContact] = useState(false);

  // Handle delete event
  const handleDelete = (id: number) => {
    // Perform delete logic
    console.log(`Deleting blog with id: ${id}`);
  };
  const handleVideoRemove = (id: number) => {
    // Handle video remove logic in AdminPage
    console.log(`Video with ID ${id} removed`);
  };
  const handleContactRemove = (id: number) => {
    // Handle video remove logic in AdminPage
    console.log(`Contact with ID ${id} removed`);
  };
  return (
    <div className="bg-light">
      <NavBar />

      <div className="m-3">
        <div>
          <h3>
            Add Blog{" "}
            <button onClick={() => setAddBlog(true)} className="btn btn-info">
              Add
            </button>
          </h3>
          {addBlog ? (
            <AddBlog />
          ) : (
            <Blog isAdmin={true} onDelete={handleDelete} />
          )}
        </div>
        <div>
          <h3>
            Add Video{" "}
            <button onClick={() => setAddVideo(true)} className="btn btn-info">
              Add
            </button>
          </h3>
          {addVideo ? (
            <AddVideo />
          ) : (
            <Video isAdmin={true} onRemove={handleVideoRemove} />
          )}
        </div>
        <div>
          <h3>
            Add Contact{" "}
            <button
              onClick={() => setAddContact(true)}
              className="btn btn-info"
            >
              Add
            </button>
          </h3>
          {addContact ? (
            <AddContact />
          ) : (
            <AuthorityContacts isAdmin={true} onDelete={handleContactRemove} />
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
