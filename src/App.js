import PageRoutes from "./utils/PageRoutes";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import * as Auth from './features/slices/auth'

function App() {

  const [onMeta, setOneMeta] = useState(true)

  const dispatch = useDispatch()

  const {user, isLoading} = useSelector(store => store.auth)

  useEffect(async () => {
    const token = localStorage.getItem('token')
    const {payload} = await dispatch(Auth.me({token}))

    if (payload.user) {
      setOneMeta(false)
    } else {
      setOneMeta(false)
    }
  }, []);

  if (onMeta) {
    return <p>страница meta</p>
  }

  return (
      <PageRoutes/>
  );
}

export default App;
