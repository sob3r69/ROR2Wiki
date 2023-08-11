import React, { useState } from 'react';
import style from './lorefield.module.css';

type LoreFieldProps = {
  content: string;
};
const LoreField = ({ content }: LoreFieldProps) => {
  const [showLore, loreState] = useState(false);
  const loreHiddenStyle: React.CSSProperties = {
    borderBottom: '2px solid #4f6372',
  };
  const loreShowStyle: React.CSSProperties = {
    borderBottom: 'none',
    visibility: 'visible',
  };
  return (
    <div>
      <button
        className={style.lore_button}
        style={showLore ? loreShowStyle : loreHiddenStyle}
        onClick={() => {
          loreState(!showLore);
        }}
      >
        Show lore
      </button>
      <pre className={style.lore_field} style={{ visibility: showLore ? 'visible' : 'hidden' }}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </pre>
    </div>
  );
};

export default LoreField;
