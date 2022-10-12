import React, { useState } from "react";
import './style/Card.css'
import ExpenseItem from "./components/ExpenseItem";
import { Card } from "./components/Card";
import NewExpense from "./components/NewExpense";
function App() {
  const date = new Date(2022, 9, 27);
  const date2 = new Date(2022,8,20)

  return (
    <Card className="card">
      <NewExpense />
    <ExpenseItem date={date}/>
    <ExpenseItem date={date2}/>
    
    {/* <Navlink />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>

        <Route path="/home" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter> */}
    </Card>
  );
}

export default App;

