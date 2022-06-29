/* eslint-disable max-len */
// == Import
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles.scss';
import Home from 'src/components/Home';
import SignInForm from 'src/components/SignInForm';
import SignUpForm from 'src/components/SignUpForm';
import NotFound from 'src/components/NotFound';
import Dashboard from '../Dashboard';
import SmallHeader from '../Dashboard/SmallHeader';
import OrderForm from '../OrderForm';
import SmallFooter from '../Dashboard/SmallFooter';
import OrderCheck from '../OrderCheck';
import UpdateProfil from '../Dashboard/UpdateProfile';
import Delivery from '../Delivery';

// == Composant
const App = () => {
  // If the user is not logged in, only the offline pages are displayed
  // If the user is logged, he can access to the Connected component (or Not Found and Home who are always access by everybody) who will redirect him to the onlines pages related to his profile
  const isLogged = useSelector((state) => state.user.isLogged);

  const profilType = useSelector((state) => state.user.profilType);

  return (
    <div className="app">
      <Routes>
        <Route
          key="/"
          path="/"
          element={<Home />}
        />
        <Route
          path="*"
          element={<NotFound />}
          key="not-found"
        />
        {!isLogged && (
          <>
            <Route
              key="signin"
              path="/connexion"
              element={<SignInForm />}
            />
            <Route
              key="signup"
              path="/inscription"
              element={<SignUpForm />}
            />
          </>
        )}
        {isLogged && (
          <>
            <Route
              // If the connection is successful, the user is redirected to his dashboard
              path="/connexion"
              element={<Navigate replace to="/dashboard" />}
            />
            <Route
              path="/dashboard"
              element={<Dashboard />}
              key="dashboard"
            />
            {profilType === 'patient' && (
              <Route
                path="/commander"
                element={(
                  <>
                    <SmallHeader />
                    <OrderForm />
                    <SmallFooter />
                  </>
                )}
                key="commander"
              />
            )}
            {profilType === 'pharmacist' && (
              <Route
                path="/preparation-commande"
                element={(
                  <>
                    <SmallHeader />
                    <OrderCheck />
                    <SmallFooter />
                  </>
                )}
                key="preparation-commande"
              />
            )}
            <Route
              path="/dashboard/modifier-profil"
              element={(
                <>
                  <SmallHeader />
                  <UpdateProfil />
                  <SmallFooter />
                </>
              )}
              key="modifier-profil"
            />
            {profilType === 'driver' && (
              <Route
                path="/course"
                element={(
                  <>
                    <SmallHeader />
                    <Delivery />
                    <SmallFooter />
                  </>
                )}
                key="course"
              />
            )}
          </>
        )}
      </Routes>
    </div>
  );
};

// == Export
export default App;
