import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Result from '~/components/result/result';

export default component$(() => {
  return (
    <>
      <Result />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Results of Shiny Contest',
  meta: [
    {
      name: 'Pokemon Shiny Contest',
      content: 'A contest to find the best pokemon shiny',
    },
  ],
};
