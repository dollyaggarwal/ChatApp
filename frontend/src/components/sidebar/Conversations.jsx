import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation"

 const Conversations = () => {
  const {loading, Conversations} = useGetConversations();

  return (<div className="py-2 flex flex-col overflow-auto">
    
    {Conversations.map((Conversation) =>(
      <Conversation key={Conversation._id} Conversation = {Conversation}/>
    ))}

    {loading ? <span className="loading loading-spinner mx-auto"></span> : null}
    </div>
  );
};
export default Conversations;

//STARTER CODE

// import Conversation from "./Conversation"
//  const Conversations = () => {
//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//      <Conversation/>
//      <Conversation/>
//      <Conversation/>
//      <Conversation/>
//      <Conversation/>
//      <Conversation/>
//     </div>
//   );
// };
// export default Conversations;

