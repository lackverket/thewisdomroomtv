import React from 'react'
import AskAQuestion from './AskAQuestion'

const AskAQuestionSection = () => {
  return (
    <section>
        <div className="w-full flex justify-between items-center px-5 py-3 my-3">
            <p className="font-bold text-[#222] text-xl">Send A Question</p>
        </div>

        <div className='w-full px-5'>
            <AskAQuestion />
        </div>
    </section>
  )
}

export default AskAQuestionSection