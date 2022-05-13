import Avatar from '@nextail/core/Avatar';
import AvatarGroup from '@nextail/core/AvatarGroup';
import { NextPage } from 'next';
import React from 'react';

const AvatarPage: NextPage = () => {
  return (
    <div className="flex">
      <AvatarGroup>
        <Avatar animateZoom placeholder="AS" status="online" />
        <Avatar animateZoom status="online" />
        <Avatar animateZoom status="online" />
      </AvatarGroup>
    </div>
  );
};

export default AvatarPage;
