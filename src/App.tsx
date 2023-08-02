import "./App.css";
import CustomTable from "./components/table/index";
import Content from "./components/content/index";

const App: React.FC = () => {
  return (
    <div className="container">
      <CustomTable />
      <Content />
    </div>
  );
};

export default App;
