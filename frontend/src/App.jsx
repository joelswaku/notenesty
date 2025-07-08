
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
 
} from 'react-router-dom';

import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ContactLayout from './layout/ContactLayout';
import ContactInfos from './components/Contactinfos';
import ContactForm from './components/ContactForm';
import NotFound from './components/NotFound';
import CreateNote from './pages/CreateNote';
import ProtectedRoute from './components/ProtectedRoute';
import { Toaster } from 'react-hot-toast';
import NotesList from './components/NotesList';
import Profile from './components/Profile';
import RateLimitedUI from './components/RateLimitedUI';
import NoteDetail from './pages/NoteDetail';
import EditNote from './pages/EditNote';
import ForgotPassword from './pages/ForgotPassword';
import VerifyCodePage from './pages/VerifyCodePage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import Feature from './pages/Feature';

//import { useRateLimitStore } from './store/useRateLimitStore';



// Create router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="privacy" element={<PrivacyPolicy />} />
      <Route path="terms" element={<TermsAndConditions />} />
    
      

      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />

      <Route path="forgot-password" element={<ForgotPassword />} />  
      <Route path="verify-reset-code" element={<VerifyCodePage />} />
      <Route path="reset-password/:code" element={<ResetPasswordPage />} />


        <Route path="featureS" element={< Feature/>} />  
      
         <Route path="/note/:id" element={<NoteDetail />} />
      <Route path="profile" element={<ProtectedRoute><Profile/></ProtectedRoute>} />
       <Route path="notes" element={
        <ProtectedRoute>
        <NotesList />
       </ProtectedRoute>
        } />
      <Route
        path="create"
        element={
          <ProtectedRoute>
            <CreateNote  />
          </ProtectedRoute>
        }
      />
      <Route
  path="/note/:id/edit" element={<ProtectedRoute> <EditNote /></ProtectedRoute> }/>

      <Route path="contact" element={<ContactLayout />}>
        <Route path="infos" element={<ContactForm />} />
        <Route path="form" element={<ContactInfos />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

// App component
function App() {
  // const { isRateLimited } = useRateLimitStore();
   


  return (
    <div className="min-h-screen">
      <Toaster position="top-right " />
      <RouterProvider router={router} />

      {/*isRateLimited && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <RateLimitedUI />
        </div>
      )*/}
    </div>
  );
}
export default App;
