import back from '../../assets/chevron-left-small.svg'
import users from '../../assets/users.svg'
import Member from '../member/Member'

const TravelingMembers = () => {
  return (
    <div className="py-20" style={{ width: '30%' }}>
      <div>
        <h2
          className="font-bold text-xl"
          style={{ color: '#1F2327', letterSpacing: '-0.1px' }}
        >
          Traveling Members
        </h2>
        <p className="font-normal text-base" style={{ color: '#60646C' }}>
          Are you traveling alone or with someone else?
        </p>
      </div>
      <div className="flex flex-col mt-12">
        <button
          className="rounded-lg border p-4 text-sm font-medium"
          style={{ borderColor: 'rgba(1, 1, 46, 0.13)' }}
        >
          Alone
        </button>
        <button
          className="rounded-lg border p-4 text-sm font-medium mt-2"
          style={{
            borderColor: '#1F2327',
            boxShadow: '0 0 0 2px rgba(2, 2, 52, 0.08)',
          }}
        >
          With Others
        </button>
      </div>
      <div
        className="rounded-2xl border p-5 mt-10"
        style={{ borderColor: 'rgba(0, 0, 48, 0.11)' }}
      >
        <div className="flex">
          <img src={users} alt="Users icon" />
          <h3 className="ml-2 font-semibold text-base">Traveling members</h3>
        </div>
        <div>
          <Member
            name="Legal Spouse"
            description="Must have marrige certificate"
            count={1}
          />
          <Member
            name="Children under 18"
            description="Must have birth certificate"
            count={2}
          />
          <Member name="Pets" description="Must have documents" count={5} />
        </div>
      </div>
      <div className="mt-5 flex justify-between">
        <button className="flex items-center">
          <img src={back} alt="Back Icon" />
          <p>Back</p>
        </button>
        <button
          className="w-24 h-12 text-white rounded-lg"
          style={{ backgroundColor: '#1F2327' }}
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default TravelingMembers
