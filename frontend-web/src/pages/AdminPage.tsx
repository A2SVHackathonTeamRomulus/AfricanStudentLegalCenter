import NavBar from "../components/NavBar";
import Blog from "../components/Blog";
import BlogAdd from "../components/Common/AddBlog";
import AuthorityContacts from "../components/AuthorityContacts";
import Video from "../components/Video";

function AdminPage() {
  return (
    <div>
      <NavBar />
      <div className="m-3">
        <Blog />
        <BlogAdd />
        <AuthorityContacts />
        <Video />
      </div>
    </div>
  );
}

export default AdminPage;
