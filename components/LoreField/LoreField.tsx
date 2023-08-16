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
  const loreShow: React.CSSProperties = {
    height: '100%',
  };
  const loreHidden: React.CSSProperties = {
    height: '0px',
    border: 'none',
    padding: '0px',
  };
  return (
    <div>
      <button
        type="button"
        className={style.showButton}
        style={showLore ? loreShowStyle : loreHiddenStyle}
        onClick={() => {
          loreState(!showLore);
        }}
      >
        Show lore
      </button>
      <pre className={style.content} style={showLore ? loreShow : loreHidden}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </pre>
    </div>
  );
};

export default LoreField;
