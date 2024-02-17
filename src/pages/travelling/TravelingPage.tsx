import FinanceInformation from '../../components/finance-information/FinanceInformation'
import Header from '../../components/header/Header'
import TravelingMembers from '../../components/traveling-members/TravelingMembers'

const TravelingPage = () => {
  return (
    <div>
      <Header />
      <main className="flex justify-between px-9">
        <TravelingMembers />
        <FinanceInformation />
      </main>
    </div>
  )
}

export default TravelingPage
