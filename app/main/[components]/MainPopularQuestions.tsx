import React from 'react'
import MainPopQuestionsItem from './MainPopQuestionsItem'

const MainPopularQuestions = () => {
  return (
    <section>
        <div className="w-full flex justify-between items-center px-5 py-3 my-3">
            <p className="font-bold text-[#222] text-xl">Popular Questions</p>
        </div>

        <div className='w-full px-5'>
            <MainPopQuestionsItem />
        </div>
    </section>
  )
}

export default MainPopularQuestions