import { Routes, Route } from 'react-router-dom';

// component
import Home from 'layout/home';
import WritePost from 'layout/writePost'
import ReadPost from 'layout/readPost';

interface Type {
  id : string;
  route : string;
  component : JSX.Element;
}

const routes : Type[] = [
  {
    id : 'home',
    route : '/',
    component : <Home />
  },
  {
    id : 'read',
    route : '/read',
    component : <ReadPost />
  },
  {
    id : 'write',
    route : '/write',
    component : <WritePost />
  },
];

const getRouter = () => {
  return (
    <Routes>
      {routes.map(item => {
        return <Route path={item.route} element={item.component} key={"route-" + item.id} />
      })}
    </Routes>
  )
}

export {
  routes,
  getRouter
}