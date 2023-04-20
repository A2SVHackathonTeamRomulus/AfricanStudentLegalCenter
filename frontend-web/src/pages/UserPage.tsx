import NavBar from "./../components/NavBar";
import Blog from "../components/Blog";
import Video from "../components/Video";
import AuthorityContacts from "../components/AuthorityContacts";

interface Props {}
function UserPage() {
  return (
    <div>
      <NavBar />
      <div>
        <Blog isAdmin={false} />
        <Video isAdmin={false} />
        <AuthorityContacts isAdmin={false} />
      </div>
    </div>
  );
}

export default UserPage;
