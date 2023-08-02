import React from 'react';
import style from './lorefield.module.css';

type LoreFieldProps = {
  content: string;
};
const LoreField = ({ content }: LoreFieldProps) => {
  return (
    <pre className={style.lore_field}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </pre>
  );
};

export default LoreField;
