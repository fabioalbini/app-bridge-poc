import PropTypes from 'prop-types';
import React, { useState } from 'react';
import style from './HelloWorld.module.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Page, LegacyCard, Button} from '@shopify/polaris';

const HelloWorld = (props) => {
  const [name, setName] = useState(props.name);

  return (
    <div>
      <h3>Hello, {name}!</h3>
      <hr />
      <form>
        <label className={style.bright} htmlFor="name">
          Say hello to:
          <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </form>
      <AppProvider i18n={enTranslations}>
      <Page title="Example app">
        <LegacyCard sectioned>
          <Button onClick={() => alert('Button clicked!')}>Example button</Button>
        </LegacyCard>
      </Page>
    </AppProvider>
    </div>
  );
};

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired, // this is passed from the Rails view
};

export default HelloWorld;
