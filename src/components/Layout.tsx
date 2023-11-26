import { useParams, Outlet, Navigate } from 'react-router-dom';
import { Note } from '../types';

type LayoutPropsType = {
  notes: Note[];
};
  
const Layout = ({ notes }: LayoutPropsType) => {
  const { id } = useParams();

  // find note
  const found = notes.find((n) => n.id === id);

  // If note is not found, redirect to home page
  if (!found) return <Navigate to={'/'} replace />;

  // print the sub route on the screen and according to the url
  // Sending the note we received as props to the sub route
  return <Outlet context={found} />;
};

export default Layout;
