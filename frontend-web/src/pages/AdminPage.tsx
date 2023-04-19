import NavBar from "../components/NavBar";
import Blog from "../components/Blog";
import BlogAdd from "../components/Common/AddBlog";

function AdminPage() {
  return (
    <div>
      <NavBar />
      <Blog
        title="Blog 1"
        content={<p>This is the section for contents</p>}
        publisher="KB123"
      />
      <BlogAdd />
    </div>
  );
}

export default AdminPage;
