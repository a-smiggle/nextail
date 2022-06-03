import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  router.replace('/setup/install', '/');
  return null;
};

export default Home;
