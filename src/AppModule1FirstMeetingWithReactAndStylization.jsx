import './App.css';
import Product from './FirstMeetingWithReact/Product';
import Profile from './FirstMeetingWithReact/Profile';
import Panel from './FirstMeetingWithReact/Panel.jsx';
import BooksList from './FirstMeetingWithReact/CollectionsList';
import InlineAlert from './Stylization/InlineAlert';
import ClassNameAlert from './Stylization/ClassNameAlert';
import ClassNameAlertWithLibraryClsx from './Stylization/ClassNameAlertWithLibraryClsx';
import LoginButton from './Stylization/LoginButton';
import FollowButton from './Stylization/FollowButton';
import AlertModuleCss from './Stylization/AlertModuleCss';


const favoriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
  { id: "id-4", name: "Redux in depth" },
];


function AppModule1FirstMeetingWithReactAndStylization() {
  return (<div>
    <h1>Best selling products:</h1>
    <Product
      imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
      name="Tacos With Lime"
      price={10.99}
      quantity={30}
    />
    <Product
      imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
      name="Fries and Burger"
      price={14.29}
    />

    <Panel title="User profile:">
      <Profile name="Mango" email="mango@mail.com" />
    </Panel>

      <h1>Bookslist:</h1>
      <BooksList books={favoriteBooks} />

      <InlineAlert variant="info">
        Would you like to browse our recommended products?
      </InlineAlert>
      <InlineAlert variant="error">
        There was an error during your last transaction
      </InlineAlert>
      <InlineAlert variant="success">
        Payment received, thank you for your purchase
      </InlineAlert>
      <InlineAlert variant="warning">
        Please update your profile contact information
      </InlineAlert>

     <ClassNameAlert variant="info">
        Would you like to browse our recommended products?
      </ClassNameAlert>
      <ClassNameAlert variant="error" outlined>
        There was an error during your last transaction
      </ClassNameAlert>
      <ClassNameAlert variant="success" elevated>
        Payment received, thank you for your purchase
      </ClassNameAlert>
      <ClassNameAlert variant="warning" outlined>
        Please update your profile contact information
      </ClassNameAlert>
    
     <ClassNameAlertWithLibraryClsx variant="info" outlined>
        Would you like to browse our recommended products?
      </ClassNameAlertWithLibraryClsx>
      <ClassNameAlertWithLibraryClsx variant="error" elevated>
        There was an error during your last transaction
      </ClassNameAlertWithLibraryClsx>
      <ClassNameAlertWithLibraryClsx variant="success" outlined>
        Payment received, thank you for your purchase
      </ClassNameAlertWithLibraryClsx>
      <ClassNameAlertWithLibraryClsx variant="warning" >
        Please update your profile contact information
      </ClassNameAlertWithLibraryClsx>
    
    <LoginButton/>
    <FollowButton/>

    <AlertModuleCss variant="info" >
        Would you like to browse our recommended products?
      </AlertModuleCss>
      <AlertModuleCss variant="error" outlined>
        There was an error during your last transaction
      </AlertModuleCss>
      <AlertModuleCss variant="success" elevated>
        Payment received, thank you for your purchase
      </AlertModuleCss>
      <AlertModuleCss variant="warning" outlined>
        Please update your profile contact information
      </AlertModuleCss>


  </div>
  )
}

export default AppModule1FirstMeetingWithReactAndStylization;










// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
