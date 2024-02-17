import bg from '../../assets/bg.jpg'
import de from '../../assets/de.svg'
import ua from '../../assets/ua.svg'

const FinanceInformation = () => {
  return (
    <div
      className="flex justify-center items-center pt-20 mb-16"
      style={{ width: '54%' }}
    >
      <div
        className="flex justify-between flex-col rounded-3xl px-5"
        style={{
          width: '68.51%',
          boxShadow: '0 0 0 4px rgba(0, 0, 48, 0.11)',
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        }}
      >
        <div className="flex flex-1 justify-between py-5">
          <div className="flex">
            <div
              className="rounded-full w-12 h-12 flex justify-center items-center"
              style={{ backgroundColor: 'rgba(19, 19, 21, 1)' }}
            >
              <p className="text-white">FT</p>
            </div>
            <div className="ml-3">
              <h4
                className="text-white font-medium text-base"
                style={{ color: 'rgba(238, 240, 241, 1)' }}
              >
                Fellow Traveler
              </h4>
              <p
                className="text-sm font-normal"
                style={{ color: 'rgba(237, 243, 253, 0.68)' }}
              >
                travelermail@gmail.com
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            <img src={de} alt="DE Flag" />
            <img src={ua} alt="UA Flag" />
          </div>
        </div>

        <div
          className="rounded-2xl"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 1)',
          }}
        >
          <div className="p-5">
            <div>
              <h4
                className="text-xs font-medium border-b border-dashed inline pb-1"
                style={{ color: 'rgba(96, 100, 108, 1)' }}
              >
                Finance Information
              </h4>
            </div>
            <div className="mt-4">
              <p
                className="font-medium text-xs"
                style={{ color: 'rgba(96, 100, 108, 1)' }}
              >
                Full Remote Job
              </p>
              <p
                className="font-medium text-sm"
                style={{ color: 'rgba(31, 35, 39, 1)' }}
              >
                Yes, for over 6 months.
              </p>
            </div>
            <div className="mt-4">
              <p
                className="font-medium text-xs"
                style={{ color: 'rgba(96, 100, 108, 1)' }}
              >
                Self employed
              </p>
              <p
                className="font-medium text-sm"
                style={{ color: 'rgba(31, 35, 39, 1)' }}
              >
                {"I'm self employed < 3 years business"}
              </p>
            </div>
            <div className="my-5 flex gap-3">
              <div
                className="flex-1 flex justify-between p-3 rounded-xl"
                style={{ backgroundColor: 'rgba(249, 249, 251, 1)' }}
              >
                <p
                  className="font-medium text-xs"
                  style={{ color: 'rgba(96, 100, 108, 1)' }}
                >
                  Income
                </p>
                <p
                  className="font-medium text-sm"
                  style={{ color: 'rgba(31, 35, 39, 1)' }}
                >
                  $1,000
                </p>
              </div>
              <div
                className="flex-1 flex justify-between p-3 rounded-xl"
                style={{ backgroundColor: 'rgba(249, 249, 251, 1)' }}
              >
                <p
                  className="font-medium text-xs"
                  style={{ color: 'rgba(96, 100, 108, 1)' }}
                >
                  Savings
                </p>
                <p
                  className="font-medium text-sm"
                  style={{ color: 'rgba(31, 35, 39, 1)' }}
                >
                  $10,000
                </p>
              </div>
            </div>
          </div>
          <div
            className="p-5 border-y"
            style={{ borderColor: 'rgba(0, 0, 48, 0.11)' }}
          >
            <h4
              className="text-xs font-medium border-b border-dashed inline pb-1"
              style={{ color: 'rgba(96, 100, 108, 1)' }}
            >
              Traveling Members
            </h4>
            <div className="flex flex-wrap justify-between mt-5">
              <div className="flex">
                <p
                  className="rounded-full text-xs font-semibold w-5 h-5 flex justify-center items-center mr-2"
                  style={{ backgroundColor: 'rgba(242, 242, 245, 1)' }}
                >
                  1
                </p>
                <p
                  className="font-medium text-sm"
                  style={{ color: 'rgba(31, 35, 39, 1)' }}
                >
                  Legal Spouce
                </p>
              </div>
              <div className="flex">
                <p
                  className="rounded-full text-xs font-semibold w-5 h-5 flex justify-center items-center mr-2"
                  style={{ backgroundColor: 'rgba(242, 242, 245, 1)' }}
                >
                  2
                </p>
                <p
                  className="font-medium text-sm"
                  style={{ color: 'rgba(31, 35, 39, 1)' }}
                >
                  Children under 18
                </p>
              </div>
              <div className="flex">
                <p
                  className="rounded-full text-xs font-semibold w-5 h-5 flex justify-center items-center mr-2"
                  style={{ backgroundColor: 'rgba(242, 242, 245, 1)' }}
                >
                  5
                </p>
                <p
                  className="font-medium text-sm"
                  style={{ color: 'rgba(31, 35, 39, 1)' }}
                >
                  Pets
                </p>
              </div>
            </div>
          </div>
          <div className="p-5">
            <h4
              className="text-xs font-medium border-b border-dashed inline pb-1"
              style={{ color: 'rgba(96, 100, 108, 1)' }}
            >
              Additions
            </h4>
            <div
              className="w-40 h-3 mt-5 rounded-full mb-10"
              style={{ backgroundColor: 'rgba(0, 0, 59, 0.05)' }}
            ></div>
          </div>
        </div>
        <p
          className="p-5 font-semibold text-xs text-center"
          style={{ color: 'rgba(230, 244, 254, 0.46)' }}
        >
          Personal Travel Card by Citizen Remote
        </p>
      </div>
    </div>
  )
}

export default FinanceInformation
