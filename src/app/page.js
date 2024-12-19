import ObratnayaStroka from "@/components/functions/functions";
import isDateEvens from "@/components/functions/dateFunctions";
export default function Home() {
  let reverseString = "etot text naoborot";
  return (
    <div>
      <h1>zadacha 1:</h1>
      <p>{ObratnayaStroka(reverseString)}</p>
      <h2>zadacha 2:</h2>
      <p>{isDateEvens()}</p>
    </div>
  );
}
