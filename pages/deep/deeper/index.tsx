import BasePathLink from 'helpers/BasePathLink';
import React from 'react';

export default function Deeper() {
  return (
    <div>
      This is a deeper page, to test this SPA.<br/>

      You should just go <BasePathLink href='/'><a>home</a></BasePathLink>
    </div>
  );
}