import MainGreeting from './[components]/MainGreeting'
import { WordSection } from './[components]/WordSection'
import MainTeachings from './[components]/MainTeachings'
import MainPopularQuestions from './[components]/MainPopularQuestions'
import AskAQuestionSection from './[components]/AskAQuestionSection'
import MainFooter from './[components]/MainFooter'
import MainNavMenu from '@/components/MainNavMenu'

const MainPage = () => {
  return (
    <div className='max-w-[800px] mx-auto pb-8 w-full min-h-screen flex flex-col overflow-x-hidden'>
        <MainGreeting />
        <WordSection />
        <MainTeachings />
        <MainPopularQuestions />
        <AskAQuestionSection />
    </div>
  )
}

export default MainPage