import './App.css';
import food from '../src/assets/food.jpg';
import Card from '../src/components/Card/Card';

function App() {
  const recipeAuthor = "Alper";
  const recipeItem = {
    title: "İskender",
    date: "08.06.2021, Salı",
    image: food,
    description: 
      "Yağsız dana bonfile ince ince dilimlere ayrılır. Geniş bir tavada kızdırılan zeytinyağında ters düz ederek kısa süreli pişirilir. Bazlamalar küp şeklinde doğranır. Tereyağı ve zeytinyağını kızdırılan tavada hafif bir renk alana kadar sotelenir. Kekik ilavesiyle çeşnilendirilir. Sos hazırlanır ve bazlamalar servis tabağına alınır. Üstüne et dilimleri eklenip domates sosu gezdirilir, yoğurt ve tereyağı eklenerek servis edilir."
  }
  return (
    <div className="App">
      <header className="App-header">
        <Card
        /*prop ismi = {değişken} */
        author= {recipeAuthor}
        title={recipeItem.title}
        date={recipeItem.date}
        image={recipeItem.image}
        description={recipeItem.description}
        />
      </header>
    </div>
  );
}

export default App;
