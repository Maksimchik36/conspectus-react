import { NavLink } from "react-router-dom";


const Home = () => {
    return (
        <>
            <h1>Conspectus React</h1>
            <ul>
                <li>
                    <NavLink to="/FirstMeetingWithReactAndStylization">First Meeting With React And Stylization</NavLink>
                </li>
                <li>
                    <NavLink to="/EventsAndStateAndForms">Events And State And Forms</NavLink>
                </li>
                <li>
                    <NavLink to="/ClassForButtonRiseOfState">Class For Button Rise Of State</NavLink>
                </li>
                <li>
                    <NavLink to="/LifeCycleClassComponent">Life Cycle Class Component</NavLink>
                </li>
                <li>
                    <NavLink to="/HTTPRequests">HTTP Requests</NavLink>
                </li>
                <li>
                    <NavLink to="/Hooks">Hooks</NavLink>
                </li>
                <li>
                    <NavLink to="/UseContext">UseContext</NavLink>
                </li>
                <li>
                    <NavLink to="/CustomUseContext">Custom UseContext</NavLink>
                </li>
                <li>
                    <NavLink to="/HookUseRef">Hook UseRef</NavLink>
                </li>
                <li>
                    <NavLink to="/RefIsNotReactive">Ref Is Not Reactive</NavLink>
                </li>
                <li>
                    <NavLink to="/VideoPlayerWithHookUseRef">Video Player With Hook UseRef</NavLink>
                </li>
                <li>
                    <NavLink to="/CustomButtonForwardRefForHookUseRef">Custom Button Forward Ref For Hook UseRef</NavLink>
                </li>
                <li>
                    <NavLink to="/HookUseMemo">Hook UseMemo</NavLink>
                </li>
                <li>
                    <NavLink to="/BooksList">Booklist</NavLink>
                </li>  
                <li>
                    <NavLink to="/HookUseParams">HookUseParams</NavLink>
                </li>
                <li>
                    <NavLink to="/Routing">Routing</NavLink>
                </li>
            </ul>
        </>
    )
}


export default Home;