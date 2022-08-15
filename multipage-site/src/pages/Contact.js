import { useLocation } from 'react-router-dom';

export default function Contact() {
  const queryString = useLocation().search;

  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get('name');

  return (
    <div>
      <h2>Hey {name}, Contact us here...</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quia
        fugiat ducimus vel ex quos et eos nulla. Dicta, iusto officiis voluptas
        tempora itaque et quod pariatur id deleniti eum?
      </p>
    </div>
  );
}
