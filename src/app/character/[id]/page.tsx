  "use client";

  import { useParams } from "next/navigation";
  import CharacterDetail from "@/app/components/CharacterDetail";


  export default function Characterpage() {
    const params = useParams()
    const {id} = params;
    return (
      <div>
        <CharacterDetail id={id}/>
      </div>
    )
  }
