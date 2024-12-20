import Card from "./components/Card"
import Counter from "./components/Counter"
import BgChange from "./components/BgChange"
import PasswordGenerator from "./components/PasswordGenerator"
import CurrencyConverter from "./components/CurrencyConvertor"


function App() {
  return (
    <>
    <CurrencyConverter/>
    <PasswordGenerator/>
      <BgChange/>
      <Counter/>
      <div className="grid grid-cols-3 grid-flow-col gap-6 p-6" >
        <Card username='Aakash Prajapati' description="Im a laravel developer"/>
        <Card username='Aakash Prajapati' description="Im a laravel developer"/>
        <Card username='Aakash Prajapati' description="Im a laravel developer"/>
        <Card username='Aakash Prajapati' description="Im a laravel developer"/>
      </div>
    </>
  );
}

export default App;
