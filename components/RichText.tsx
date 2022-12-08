import styles from '@components/RichText.module.scss';

import * as React from 'react';
import * as U from '@common/utilities';

import { Remarkable } from 'remarkable';

export default function RichText(props) {
  const md = new Remarkable({
    linkTarget: '_blank',
  });

  const markdown = md.render(props.children);

  return <div className={U.classNames(styles.block, styles.container)} dangerouslySetInnerHTML={{ __html: markdown }} />;
}
