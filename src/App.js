import "./App.css";
import { Layout} from "antd";
import AppHeader from './components/common/header'
import AppFooter from "./components/common/footer";
import AppHome from './views/home'
import SignUp from "./components/home/SignUp";
const { Header, Content, Footer } = Layout;


function App() {
  return (
    <Layout className="mainLayout">
      <Header>
      <AppHeader/>
      </Header>
      <Content>
        <AppHome/>
        <SignUp/>
      </Content>
      <Footer>
        <AppFooter/>
      </Footer>
    </Layout>
  );
}

export default App;
