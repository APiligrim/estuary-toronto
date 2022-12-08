import React from 'react';
import { Input } from 'theme-ui';
import style from '@components/Apply.module.scss';
import EventInformation from './EventInformation';
import Button from './Button';

export default function Apply() {
  return (
    <div className={style.pageContainer}>
      <div className={style.center}> Apply for an Invite</div>
      <div className={style.center}>
        <EventInformation />
      </div>

      <div className={style.formContainer}>
        <Input placeholder="Full Name" />
        <Input placeholder="Email" />

        <Input placeholder="Twitter" />
        <Input placeholder="Linkedin" />

        <Input placeholder="Message" />

        <div className={style.actions}>
          <Button>Submit</Button>
        </div>
      </div>
    </div>
  );
}
