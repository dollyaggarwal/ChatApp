import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message"

const Messages = () => {
  const {messages, loading}=useGetMessages();
  return (
    <div className="px-4 flex-1 overflow-auto">
       
    </div>
  )
}

export default Messages;


//STARTER CODE
// import Message from "./Message"

// const Messages = () => {
//   return (
//     <div className="px-4 flex-1 overflow-auto">
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//     </div>
//   )
// }

// export default Messages;