import React from "react";

function MainContent() {
  return (
    <>
      <h2>Main Content goes here</h2>
      <p>
        Libraries can prevent waterfalls by offering a more centralized way to
        do data fetching. For example, Relay solves this problem by moving the
        information about the data a component needs to statically analyzable
        fragments, which later get composed into a single query. On this page,
        we don’t assume knowledge of Relay, so we won’t be using it for this
        example. Instead, we’ll write something similar manually by combining
        our data fetching methods:
      </p>
    </>
  );
}

export default MainContent;
