import React from "react";
import Article from "./Article";
import Comment from "./Comment";

function App() {
  return (
    <div>
      <Article /><div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>
      <Comment /><div>Naturally, I agree with this article.</div>;
    </div>
  );
}

export default App;
