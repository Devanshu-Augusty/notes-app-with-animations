import React from 'react';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddNotes from './components/AddNotes';
import EditNotes from './components/EditNotes';
import { Toaster } from 'react-hot-toast';


const App = () => {
  return (
    <BrowserRouter>
      <div
        className='mx-[19rem] max-md:mx-0 bg-slate-900 h-screen
        text-white flex flex-col px-3'
      >
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/add-note' element={<AddNotes/>} />
          <Route path='/note/:id' element={<EditNotes />} />
        </Routes>
        
        <Toaster />
      </div>
    </BrowserRouter>
  );
};

export default App;