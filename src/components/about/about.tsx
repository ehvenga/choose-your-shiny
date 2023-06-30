import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './about.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <main>
      <h3>About</h3>
      <p>
        The objective of this project is to gather information on the most
        favored Pokemon shiny sprite and analyze the community's preferences.
      </p>
      <ul>
        <li>
          <a href='https://www.github.com/ehvenga/'>github</a>
        </li>
        <li>
          <a href='https://www.twitter.com/ehvenga/'>twitter</a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/ehvenga/'>linkedin</a>
        </li>
      </ul>
    </main>
  );
});
