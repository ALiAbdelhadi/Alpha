import { TimeLineData } from '@/app/constant'
import HowItWorksTimeLine from './HowItWorksTimeLine'


const HowItWorksSection = () => {
   return (
      <div className="w-full mb-16 md:mb-24">
         <HowItWorksTimeLine data={TimeLineData} />
      </div>
   )
}

export default HowItWorksSection