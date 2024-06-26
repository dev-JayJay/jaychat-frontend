import './App.css';
import SideBar from './components/SideBar';
import Cards from './components/Cards';
import MessageBody from './components/MessageBody';

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white w-[88%] h-[90vh] mx-auto my-8 border rounded-xl flex flex-row justify-around items-center">
        <div className="w-[8%] h-[90%]">
          <SideBar className="" />
        </div>
        <div className='w-[30%] h-[90%] flex flex-col gap-9'>
          <div className='h-[45%] overflow-y-auto bg-[#11468f] p-4 rounded-xl'>
            <h4 className='text-left text-white text-[20px] font-semibold mx-4'>JayChat Users</h4>
            <div>
              {
                users.map((item, index) => (
                  <Cards key={index} name={item.name} message={item.message} number={item.number} />
                ))
              }
            </div>
          </div>
          <div className='h-[45%] overflow-y-auto bg-[#11468f] p-4 rounded-xl'>
            <h4 className='text-left text-white text-[20px] font-semibold mx-4'>Friends</h4>
            <div>
              {
                users.map((item, index) => (
                  <Cards key={index} name={item.name} message={item.message} number={item.number} />
                ))
              }
            </div>
          </div>
        </div>
        <div className='w-[45%]'>
          <MessageBody />
        </div>
      </div>
    </div>
  );
}

export default App;

const users = [
  {
    name: "Jay Jay",
    message: "This is Jay's message",
    number: "5",
  },
  {
    name: "Jay Jay",
    message: "This is Jay's message",
    number: "5",
  },
  {
    name: "Jay Jay",
    message: "This is Jay's message",
    number: "5",
  },
  {
    name: "Jay Jay",
    message: "This is Jay's message",
    number: "5",
  },
];
