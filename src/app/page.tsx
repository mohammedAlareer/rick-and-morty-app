import CharechatersList from "./components/CharechatersList";
import MaxWidthWrapper from "./components/MaxWidthWrapper";


export default async function Home() {

  const charactersAPI = await fetch('https://rickandmortyapi.com/api/character');
  const characters =  await charactersAPI.json()

  return (
    <MaxWidthWrapper>
    <div>
      <CharechatersList />
    </div>
    </MaxWidthWrapper>
  );
}
