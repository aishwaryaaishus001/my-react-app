import {useRouter} from 'next/router';

export default function Home() {
  const router = useRouter();
  //const{name} = router.query;
  /*let sum = parseInt(router.query.a) + parseInt(router.query.b);
  <p>Sum = {sum}</p>;*/
  return(
    <h1>
      {router.query.name?`Hello ${router.query.name}`:"I don't know your name"}
    </h1>
  );
}
