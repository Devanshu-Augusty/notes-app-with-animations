import { motion } from 'framer-motion';

const AddNotesContent = ({
  note,
  setNote,
}) => {
  return (
    <motion.div
      className='flex flex-col gap-2 justify-center'
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{duration: 0.8, ease: 'easeIn', delay: 0.4}}
    >
      <input
        type="text"
        placeholder='Title'
        value={note.title || ""}
        onChange={(e) => setNote((prev) => (
          {
            ...prev,
            title: e.target.value,
          }
        ))}
        className='outline-none bg-inherit text-3xl px-3
        font-bold'
      />
      <hr />
      <textarea
        rows="10"
        placeholder='Add details, tasks, or reminders...'
        value={note.description || ""}
        onChange={(e) => setNote((prev) => (
          {
            ...prev,
            description: e.target.value,
          }
        ))}
        className='outline-none bg-inherit text-2xl px-3'
      />
    </motion.div>
  )
}

export default AddNotesContent;