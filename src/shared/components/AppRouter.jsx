// import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
//import { AuthContext } from '../../modules/auth/authContext';
//import { LoginScreen } from '../../modules/auth/LoginScreen';
//import {PublicNavbar} from './PublicNavbar';
import {AdminNabvar} from '../components/AdminNabvar';
//import {CategoryScreen} from '../../modules/category/CategoryScreen'
import { FabricantesScreen, SubCategoryScreen } from '../../modules/fabricante/FabricantesScreen';


export const AppRouter = () => {

  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
              <>
                <AdminNabvar/>
                <Container style={{ marginTop: '20px' }}>
                  <Routes>
                          
                    <Route path="fabricante" element={<FabricantesScreen/>} />
                    <Route index element={<>INDEX</>} />
                    <Route path="*" element={<>404</>} />

                  </Routes>
                </Container>
              </>
           
          }
        />
        <Route path="*" element={<>404</>} />
      </Routes>
    </Router>
  );
};
