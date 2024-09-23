import { createBrowserRouter } from 'react-router-dom';

// components
import DefaultPageLayout from '@layouts/DefaultPageLayout';

// pages
import MainPage from '@pages/main/MainPage';
import BoothDetailPage from '@pages/boothDetail/BoothDetailPage';
import SettingPage from '@pages/setting/SettingPage';
import WaitingCheckPage from '@pages/waitingCheck/WaitingCheckPage';
import WaitingDetailPage from '@pages/waitingDetail/WaitingDetailPage';
import MyWaitingListPage from '@pages/myWaitingList/MyWaitingListPage';
import LoginRedirect from '@components/login/LoginRedirect';

const router = createBrowserRouter([
  { path: '/', children: [{ path: '', element: <MainPage /> }] },
  {
    path: '/',
    element: <DefaultPageLayout />,
    children: [
      { path: '', element: <MainPage /> },
      { path: 'booth/:boothID', element: <BoothDetailPage /> },
      { path: 'check', element: <WaitingCheckPage /> },
      { path: 'waiting/:waitingID', element: <WaitingDetailPage /> },
      { path: 'my-waiting', element: <MyWaitingListPage /> },
      { path: 'setting', element: <SettingPage /> },
      { path: 'login/kakao', element: <LoginRedirect /> },
    ],
  },
]);

export default router;
