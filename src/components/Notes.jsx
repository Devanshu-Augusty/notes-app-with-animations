import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Notecard = ({ id, title, description, date, delay }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/note/${id}`);
  }

  return (
    <motion.div
      className='flex flex-col h-[6rem] w-52 bg-slate-700
      p-1 justify-center rounded-lg shadow-lg
      shadow-slate-800 cursor-pointer'
      onClick={handleNavigation}
      variants={{
        hidden: { opacity: 0, y: 70 },
        show: {
          opacity: 1, y: 0,
          transition: {
            duration: 0.6,
          }
        },
      }}
    // initial={{ opacity: 0, y: 70 }}
    // animate={{ opacity: 1, y: 0 }}
    // transition={{ duration: 0.6, ease: "easeIn", delay: delay }}
    >
      <h1
        className='text-xl font-bold p-1 truncate'
      >
        {title}
      </h1>
      <span
        className='text-slate-300 text-sm p-1 truncate'
      >
        {description}
      </span>
      <p
        className='text-xs px-1'
      >
        {date}
      </p>
    </motion.div>
  )
}


const Notes = ({ searchNotes }) => {
  const localStorageData = JSON.parse(localStorage.getItem('notes')) || [];
  console.log(searchNotes);
  const [notes, setNotes] = useState(localStorageData);

  useEffect(() => {
    if (searchNotes.length >= 1) {
      setNotes(localStorageData.filter((item) => (
        item.title.toLowerCase().includes(searchNotes.toLowerCase())
      )));
    }
    else {
      setNotes(localStorageData);
    }

  }, [searchNotes]);

  return (
    <motion.div
      className='flex flex-wrap gap-4 items-center py-4
      justify-start'
      variants={{
        hidden: {
          opacity: 0,
        },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.4,
          }
        }
      }}
      initial="hidden"
      animate="show"
    >
      {notes.map((note, index) => (
        <Notecard
          key={note.id}
          id={note.id}
          title={note.title}
          description={note.description}
          date={note.date}
          delay={0.2 + (index * 0.5)}
        />
      ))}
    </motion.div>
  )
}

export default Notes