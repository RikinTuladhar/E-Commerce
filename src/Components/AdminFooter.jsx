import React from "react";

function AdminFooter() {
  return (
    <div>
      <div className="row">
        <div className="text-center col">
          <p className="mb-0 text-muted">&copy; Dokan, All Rights Reserved</p>
          <p className="mb-0 text-muted">
            Designed By{" "}
            <a href="https://htmlcodex.com" className="text-muted">
              Dokan
            </a>
          </p>
          <p className="mb-0 text-muted">
            Distributed By{" "}
            <a href="https://themewagon.com" className="text-muted">
              Dokan
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminFooter;
