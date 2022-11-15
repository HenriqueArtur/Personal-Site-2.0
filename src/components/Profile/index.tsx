// @ts-ignore
import { Identification, Terminal } from '@carbon/icons-react';

export default function Profile(): JSX.Element {
  return (
    <section className="absolute grid grid-cols-3 gap-2 border border-secondary rounded-lg w-9/12 h-4/6 inset-0 left-[3rem] m-auto p-6">
      <div className="col-span-2">
        <h2>Henrique Artur</h2>
        <p>Full-Stack Dev</p>
      </div>
      <div>
        <Terminal size={64} />
      </div>
      <div></div>
    </section>
  );
};