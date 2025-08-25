import React, { useContext, useState } from 'react';
import { ImageContext, UserContext } from './context';
import CreateImage from './components/CreateImage';
import Download from './components/Download';
import Glow from './components/Glow';
import Header from './components/Header';
import ImageModal from './components/ImageModal';
import UserModal from './components/UserModal';

const Page = () => {
      const [page, setPage] = useState("create");
      const {singleImage} = useContext(ImageContext);
      const {showUserModal} = useContext(UserContext);


  return (
    <>
  {showUserModal && <UserModal/>}
    {singleImage && <ImageModal url={singleImage} />}
          <div className="container mx-auto px-4 py-8 max-w-6xl bg-[linear-gradient(135deg,_#0f0f0f_0%,_#1a0b2e_100%)]">
            <Header setPage={setPage} page={page} />
            <Glow />
            {page === "create" ? <CreateImage /> : <Download />}
          </div>
      
    </>
  );
};

export default Page;