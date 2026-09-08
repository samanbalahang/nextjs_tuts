import DashboardHeader from '../components/DashboardHeader'

export default function Template({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='im dashboard'>
      <DashboardHeader />
      {children}
    </div>
  )
}
