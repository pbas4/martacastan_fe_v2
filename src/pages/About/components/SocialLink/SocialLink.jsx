import React from 'react';
import { SocialLinkContainer } from '../../components';

const SocialLink = ({ link, socialName, name }) => (
  <SocialLinkContainer>
    <span>{socialName}</span>
    <a href={link} target="_blank" rel="noreferrer">{name}</a>
  </SocialLinkContainer>
);

export default SocialLink;
