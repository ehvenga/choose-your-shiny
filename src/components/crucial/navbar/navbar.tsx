import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './navbar.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <nav>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/results'>Results</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
      </ul>
    </nav>
  );
});
