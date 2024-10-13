
import './App.css';
import SignUpPage from './Component/SignUpPage';
import TitlePage from "./Component/TitlePage";
import MenuPage from "./Component/MenuPage";
import UserLoginPage from './Component/UserLoginPage';
import TodoListMenuPage from './Component/TodoListMenuPage';
import TodoPersonal from './Component/TodoPersonal';
import TodoWork from './Component/TodoWork';
import TodoHealth from './Component/TodoHealth';
import TodoEducation from './Component/TodoEducation';
import TodoFinance from './Component/TodoFinance';
import JobPortal from './Component/JobPortal';
import JobApplication from './Component/JobApplication';
import ForgetPassword from './Component/ForgetPassword';
import AboutPage from './Component/AboutPage';
import CategoryPage from "./Component/CategoryPage";


import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<TitlePage />} />
          <Route path="/UserLoginPage" element={<UserLoginPage />} />
          <Route path="/MenuPage" element={<MenuPage />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/TodoListMenuPage" element={<TodoListMenuPage />} />
          <Route path="/TodoPersonal" element={<TodoPersonal />} />
          <Route path="/TodoWork" element={<TodoWork />} />
          <Route path="/TodoHealth" element={<TodoHealth />} />
          <Route path="/TodoEducation" element={<TodoEducation />} />
          <Route path="/TodoFinance" element={<TodoFinance />} />
          <Route path="/JobPortal" element={<JobPortal />} />
          <Route path="/JobApplication" element={<JobApplication />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/CategoryPage" element={<CategoryPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
