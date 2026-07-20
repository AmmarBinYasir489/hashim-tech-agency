import { Briefcase, Users, Award, Clock } from 'lucide-react'
import NeuCard from '../components/NeuCard'
import StatCounter from '../components/StatCounter'

export default function Stats() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="section-padding max-w-7xl mx-auto">
        <NeuCard className="p-8 sm:p-12" hover={false}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCounter value={150} suffix="+" label="Projects Delivered" icon={Briefcase} index={0} />
            <StatCounter value={98} suffix="%" label="Client Satisfaction" icon={Award} index={1} />
            <StatCounter value={40} suffix="+" label="Team Members" icon={Users} index={2} />
            <StatCounter value={6} suffix="+" label="Years of Excellence" icon={Clock} index={3} />
          </div>
        </NeuCard>
      </div>
    </section>
  )
}
