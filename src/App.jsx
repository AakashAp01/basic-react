import Card from "./components/Card"
import Counter from "./components/Counter"
import BgChange from "./components/BgChange"


function App() {
  return (
    <>
      <BgChange/>
      <Counter/>
      <Card username='Aakash Prajapati' description="Im a laravel developer"/>
    </>
  );
}

export default App;
