

// if
const Mailbox = ({ unreadMessages }) => {
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <p>You have {unreadMessages.length} unread messages.</p>
      )}
    </div>
  );
};


// if...else
// const Mailbox = ({ name, unreadMessages }) => {
//   return (
//     <div>
//       <h1>Hello {name}</h1>
//       <p>
//         {unreadMessages.length > 0
//           ? `You have ${unreadMessages.length} unread messages.`
//           : "No unread messages."}
//       </p>
//     </div>
//   );
// };


export default Mailbox;