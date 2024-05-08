import Auth from "../utils/auth";

import Artist from "./";

const Profile = () => {
  return (
    <div className="site-width mx-auto">
      <div className="description">
        <div
          className="container bd-gutter border bs-border-color bg-opacity-10 rounded-1 shadow"
          id="description"
        >
          <h2>
            <Artist />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
