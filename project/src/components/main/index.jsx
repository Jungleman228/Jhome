import { Routes, Route } from "react-router";
import DeepSeekChat from "../ChatGPT/ChatGPT";
import Chat from "../chat";
import Home from "../home";
import SmartHouse from "../smart-house";
import TestApi from "../test-api";
import styles from "../main/style.module.css";
import Header from "../header";


const Main = () => {
return (
<div className={styles.container}>
<Header/>
<Routes>
<Route exact path="/" element={<Home/>} />
<Route path="/chat" element={<DeepSeekChat/>} />
<Route path="/test" element={<TestApi/>} />
<Route path='/smart' element={<SmartHouse/>}/>
</Routes>


</div>
);
};

export default Main;
