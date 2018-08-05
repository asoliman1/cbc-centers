import React from "react";
import { withLocalize } from "react-localize-redux";
import store from '../../helpers/store'
import { Button, Radio, Icon } from 'antd';
import { changeLang } from '../../actions/index'; 
const LanguageToggle = ({ languages, activeLanguage, setActiveLanguage }) => (
  <Radio.Group value={'small'} onChange={(e)=>{setActiveLanguage(e.target.value); store.dispatch(changeLang(e.target.value))}}>
    {languages.filter(e=>e!==activeLanguage).map(lang => (
                <Radio.Button style={{background:'transparent',fontSize:'20px',fontWeight:'bold',border:'0',color:'white'}} key={lang.code} value={lang.code}> {lang.name.toLocaleUpperCase().charAt(0)} </Radio.Button>
    ))}
          </Radio.Group>

);

export default withLocalize(LanguageToggle);
