import React from "react";

export const Content1 = () => (
  <div class="container">
    <h3 class="headings">Declarative</h3>
    <div>
      <p>
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application, and React will efficiently update
        and render just the right components when your data changes.
      </p>
      <p>
        Declarative views make your code more predictable and easier to debug.
      </p>
    </div>
  </div>
);

export const Content2 = () => (
  <div class="container">
    <h3 class="headings">Component-Based</h3>
    <div>
      <p>
        Build encapsulated components that manage their own state, then compose
        them to make complex UIs.
      </p>
      <p>
        Since component logic is written in JavaScript instead of templates, you
        can easily pass rich data through your app and keep state out of
        the&nbsp;DOM.
      </p>
    </div>
  </div>
);

export const Content3 = () => (
  <div class="container">
    <h3 class="headings">Learn&nbsp;Once, Write&nbsp;Anywhere</h3>
    <div>
      <p>
        We don’t make assumptions about the rest of your technology stack, so
        you can develop new features in React without rewriting existing code.
      </p>
      <p>
        React can also render on the server using Node and power mobile apps
        using{" "}
        <a
          href="https://reactnative.dev/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          React Native
        </a>
        .
      </p>
    </div>
  </div>
);
