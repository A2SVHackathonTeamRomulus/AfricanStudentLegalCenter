import { useState } from "react";

import NavBar from "./../components/NavBar";
import Blog from "./../components/Blog";
import Video from "./../components/Video";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />
      <Blog
        title="Blog 1"
        content={<p>This is the content for the first one</p>}
        publisher="12w@gfs"
      />
      <Video title="Video 1" url="Url for video one" />
    </div>
  );
}

export default App;
