import React, { useEffect, useState } from 'react'
import Header from './Header';
import Notes from './Notes';
import Button from './Button';
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSearch } from "react-icons/fi";
import { GiCrossedBones } from "react-icons/gi";


const HomePage = () => {
  const [isSearching, setIsSearching] = useState(false);

  const onSearchClick = () => {
    setIsSearching(!isSearching);
  }

  const [searchNotes, setSearchNotes] = useState("");

  return (
    <>
      <Header
        leftContent={isSearching ? (
          <motion.input
            type="text"
            placeholder='Search Notes...'
            onChange={(e) => {
              setSearchNotes(e.target.value)
            }}
            className='p-2 bg-slate-500 rounded-2xl w-full flex-1
            text-md'
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
          />
        ) : (
          <h1 className='text-3xl font-bold'>Notes</h1>
        )}
        rightContent={<Button
          icon={!isSearching ? <FiSearch size={25} /> : <GiCrossedBones size={25} />}
          onClick={onSearchClick}
        />}
      />
      <div className='overflow-y-scroll no-scrollbar'>
        <Notes searchNotes={searchNotes} />
        <Link to={'/add-note'}>
          <div className='absolute mx-[19.75rem] max-md:mx-[0.75rem] top-[450px] right-0'>
            <Button icon={<FaPlus size={25} />} />
          </div>
        </Link>
      </div>
    </>

  )
}

export default HomePage;