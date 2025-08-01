import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './Components/Header';
import Contact from './Pages/Contact'; // Import directly
import Facilities from './Pages/Facilities'; // Import directly
import Home from './Pages/Home'; // Import directly
import Rooms from './Pages/Rooms'; // Import directly

// Routes configuration
const routes = [
   { path: '/', element: <Home /> },
   { path: '/facilities', element: <Facilities /> },
   { path: '/rooms', element: <Rooms /> },
   { path: '/contact', element: <Contact /> },
];

const router = createBrowserRouter([
   {
      element: (
         <header className="header-section">
            <Header />
            <main className="appMain">
               <Outlet />
            </main>
         </header>
      ),
      children: routes.map(({ path, element }) => ({
         path,
         element,
      })),
   },
]);

function App() {
   return <RouterProvider router={router}></RouterProvider>;
}

export default App;


