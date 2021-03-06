import React from "react";
import Head from 'next/head';

import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [{nickname: "제로초1"}, {nickname: "노드"}, {nickname: "버드"}];
  const followingList = [{nickname: "제로초2"}, {nickname: "노드2"}, {nickname: "버드2"}];

  return (
    <>
      <Head>
          <title>NodeBird | 내 프로필</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;